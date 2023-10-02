using System;

public abstract class Employee
{
    protected string department;
    protected string name;
    protected string location;
    protected bool isOnVacation;

    public Employee(string name, string location)
    {
        this.department = "Base Department";
        this.name = name;
        this.location = location;
        this.isOnVacation = false; 
    }

    public string GetDepartment()
    {
        return department;
    }

    public string GetName()
    {
        return name;
    }

    public string GetLocation()
    {
        return location;
    }

    public bool GetStatus()
    {
        return isOnVacation;
    }

    public void SwitchStatus()
    {
        isOnVacation = !isOnVacation;
    }
}

public class FinanceEmployee : Employee
{
    public FinanceEmployee(string name, string location) : base(name, location)
    {
        department = "Finance";
    }
}

public class MarketingEmployee : Employee
{
    public MarketingEmployee(string name, string location) : base(name, location)
    {
        department = "Marketing";
    }
}

class Solution
{
    static void Main()
    {
        string input = Console.ReadLine();
        string[] inputArr = input.Split(' ');

        FinanceEmployee financeEmployee = new FinanceEmployee(inputArr[0], inputArr[1]);

        var department = financeEmployee.GetDepartment();
        var name = financeEmployee.GetName();
        var location = financeEmployee.GetLocation();
        var status = financeEmployee.GetStatus() ? "on" : "not on";

        Console.WriteLine($"FinanceEmployee info: Department - {department}, Name - {name}, Location - {location}");
        Console.WriteLine($"{name} is {status} vacation");

        Console.WriteLine("Switching");
        financeEmployee.SwitchStatus();
        status = financeEmployee.GetStatus() ? "on" : "not on";
        Console.WriteLine($"{name} is {status} vacation");

        Console.WriteLine("Switching");
        financeEmployee.SwitchStatus();
        status = financeEmployee.GetStatus() ? "on" : "not on";
        Console.WriteLine($"{name} is {status} vacation");

        input = Console.ReadLine();
        inputArr = input.Split(' ');

        MarketingEmployee marketingEmployee = new MarketingEmployee(inputArr[0], inputArr[1]);

        department = marketingEmployee.GetDepartment();
        name = marketingEmployee.GetName();
        location = marketingEmployee.GetLocation();
        status = marketingEmployee.GetStatus() ? "on" : "not on";

        Console.WriteLine($"MarketingEmployee info: Department - {department}, Name - {name}, Location - {location}");
        Console.WriteLine($"{name} is {status} vacation");

        Console.WriteLine("Switching");
        marketingEmployee.SwitchStatus();
        status = marketingEmployee.GetStatus() ? "on" : "not on";
        Console.WriteLine($"{name} is {status} vacation");

        Console.WriteLine("Switching");
        marketingEmployee.SwitchStatus();
        status = marketingEmployee.GetStatus() ? "on" : "not on";
        Console.WriteLine($"{name} is {status} vacation");
    }
}
