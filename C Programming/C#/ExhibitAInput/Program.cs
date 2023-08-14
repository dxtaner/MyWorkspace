using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;

class Program
{
    static void Main()
    {
        List<string> lines = File.ReadAllLines("exhibitA-input.csv").Skip(1).ToList();

        var distinctPlays = new Dictionary<int, HashSet<string>>();

        foreach (string line in lines)
        {
            string[] parts = line.Split('\t');

            string playId = parts[0];
            string songId = parts[1];
            int clientId = int.Parse(parts[2]);

            string playTsString = parts[3];
            DateTime playTs;

            if (!DateTime.TryParseExact(playTsString, "dd/MM/yyyy HH:mm:ss", CultureInfo.InvariantCulture, DateTimeStyles.None, out playTs))
            {
                if (!DateTime.TryParseExact(playTsString, "dd/MM/yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out playTs))
                {
                    Console.WriteLine($"Invalid data format in line: {line}");
                    continue;
                }
            }

            if (playTs.Date == new DateTime(2016, 8, 10))
            {
                if (!distinctPlays.ContainsKey(clientId))
                {
                    distinctPlays[clientId] = new HashSet<string>();
                }

                distinctPlays[clientId].Add(songId);
            }
        }

        var result = distinctPlays.GroupBy(kv => kv.Value.Count)
                                  .Select(group => new
                                  {
                                      DistinctPlayCount = group.Key,
                                      ClientCount = group.Count()
                                  })
                                  .OrderBy(entry => entry.DistinctPlayCount);

        Console.WriteLine("DISTINCT_PLAY_COUNT\tCLIENT_COUNT");

        foreach (var entry in result)
        {
            Console.WriteLine($"{entry.DistinctPlayCount}\t{entry.ClientCount}");
        }

        int maxDistinctSongs = distinctPlays.Values.Max(set => set.Count);
        Console.WriteLine($"Maximum number of distinct songs played: {maxDistinctSongs}"); // 393

        int targetDistinctSongs = 346;
        int usersWithTargetDistinctSongs = distinctPlays.Count(kv => kv.Value.Count == targetDistinctSongs);
        Console.WriteLine($"Number of users who played {targetDistinctSongs} distinct songs: {usersWithTargetDistinctSongs}"); // 22 


    }
}
