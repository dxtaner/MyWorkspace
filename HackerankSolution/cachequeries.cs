using System;
using System.Collections.Generic;
using System.Linq;

class Result
{
    public static List<int> getQueryAnswers(List<List<string>> cache_entries, List<List<string>> queries)
    {
        // Create a dictionary to store cache entries with the key as "key timestamp"
        Dictionary<string, int> cache = new Dictionary<string, int>();

        // Process cache_entries and store them in the dictionary
        foreach (var entry in cache_entries)
        {
            string timestamp = entry[0];
            string key = entry[1];
            int value = int.Parse(entry[2]);
            string cacheKey = key + " " + timestamp;
            cache[cacheKey] = value;
        }

        List<int> results = new List<int>();

        // Process queries and retrieve values from the cache
        foreach (var query in queries)
        {
            string key = query[0];
            string timestamp = query[1];
            string cacheKey = key + " " + timestamp;
            if (cache.ContainsKey(cacheKey))
            {
                results.Add(cache[cacheKey]);
            }
        }

        return results;
    }
}

class Solution
{
    public static void Main(string[] args)
    {
        int cache_entriesRows = Convert.ToInt32(Console.ReadLine().Trim());
        int cache_entriesColumns = Convert.ToInt32(Console.ReadLine().Trim());

        List<List<string>> cache_entries = new List<List<string>>();

        for (int i = 0; i < cache_entriesRows; i++)
        {
            cache_entries.Add(Console.ReadLine().TrimEnd().Split(' ').ToList());
        }

        int queriesRows = Convert.ToInt32(Console.ReadLine().Trim());
        int queriesColumns = Convert.ToInt32(Console.ReadLine().Trim());

        List<List<string>> queries = new List<List<string>>();

        for (int i = 0; i < queriesRows; i++)
        {
            queries.Add(Console.ReadLine().TrimEnd().Split(' ').ToList());
        }

        List<int> result = Result.getQueryAnswers(cache_entries, queries);

        Console.WriteLine(string.Join("\n", result));
    }
}
