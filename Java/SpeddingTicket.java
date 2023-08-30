import java.util.*;
import java.io.*;

class FineSummary {
    long lastPolledInfo;
    int numberOfTimesFineImposed;
    List<Long> fineHistory;

    public FineSummary() {
        fineHistory = new ArrayList<>();
    }
}

class Vehicle {
    int vehicleNumber;
    FineSummary fineSummary;

    public Vehicle(int vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
        this.fineSummary = new FineSummary();
    }
}

interface IVehicleTrackingService {
    void registerVehicle(int vehicleNumber);
    Vehicle getVehicleInfo(int vehicleNumber);
    boolean polledVehicleInfo(int vehicleNumber, long distanceTraveledInKm, long epochTime);
    List<Long> fineHistory(int vehicleNumber, int K);
}

class VehicleTrackingService implements IVehicleTrackingService {
    Map<Integer, Vehicle> vehicleMap;
    long speedLimit;

    public VehicleTrackingService(long M) {
        this.vehicleMap = new HashMap<>();
        this.speedLimit = M;
    }

    @Override
    public void registerVehicle(int vehicleNumber) {
        Vehicle vehicle = new Vehicle(vehicleNumber);
        vehicleMap.put(vehicleNumber, vehicle);
    }

    @Override
    public Vehicle getVehicleInfo(int vehicleNumber) {
        return vehicleMap.get(vehicleNumber);
    }

    @Override
    public boolean polledVehicleInfo(int vehicleNumber, long distanceTraveledInKm, long epochTime) {
        Vehicle vehicle = vehicleMap.get(vehicleNumber);
        if (vehicle.fineSummary.lastPolledInfo != 0) {
            double averageSpeed = (double) distanceTraveledInKm / (epochTime - vehicle.fineSummary.lastPolledInfo);
            if (averageSpeed > speedLimit) {
                vehicle.fineSummary.numberOfTimesFineImposed++;
                vehicle.fineSummary.fineHistory.add(epochTime);
                return true;
            }
        }
        vehicle.fineSummary.lastPolledInfo = epochTime;
        return false;
    }

    @Override
    public List<Long> fineHistory(int vehicleNumber, int K) {
        Vehicle vehicle = vehicleMap.get(vehicleNumber);
        List<Long> history = new ArrayList<>(vehicle.fineSummary.fineHistory);

        Collections.sort(history, Collections.reverseOrder());

        if (history.size() > K) {
            history.subList(K, history.size()).clear();
        }

        return history;
    }
}

public class SpeddingTicket {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(new OutputStreamWriter(System.out));
        String arr[];
        int numberOfQueries, M;

        arr = br.readLine().trim().split(" ");
        numberOfQueries = Integer.parseInt(arr[0]);
        M = Integer.parseInt(arr[1]);

        VehicleTrackingService vehicleTrackingService = new VehicleTrackingService(M);
        for (int queryNumber = 1; queryNumber <= numberOfQueries; queryNumber++) {
            arr = br.readLine().trim().split(" ");
            switch (arr[0]) {
                case "registerVehicle":
                    int vehicleNum = Integer.parseInt(arr[1]);
                    vehicleTrackingService.registerVehicle(vehicleNum);
                    break;

                case "getVehicleInfo":
                    vehicleNum = Integer.parseInt(arr[1]);
                    Vehicle vehicle = vehicleTrackingService.getVehicleInfo(vehicleNum);
                    out.println(vehicle.fineSummary.lastPolledInfo + " " + vehicle.fineSummary.numberOfTimesFineImposed);
                    break;

                case "polledVehicleInfo":
                    boolean flag = vehicleTrackingService.polledVehicleInfo(Integer.parseInt(arr[1]), Integer.parseInt(arr[2]), 
                    Long.parseLong(arr[3]));
                    out.println(flag);
                    break;

                case "fineHistory":
                    vehicleNum = Integer.parseInt(arr[1]);
                    int K = Integer.parseInt(arr[2]);
                    List<Long> fineTimeStamps = vehicleTrackingService.fineHistory(vehicleNum, K);
                    for (long x : fineTimeStamps) {
                        out.print(x + " ");
                    }
                    out.println();
                    break;
            }
        }

        out.flush();
        out.close();
    }
}
