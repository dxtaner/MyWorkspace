using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace VeriketAppService
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly string _programDataPath;
        private readonly string _logFilePath;

        public Worker(ILogger<Worker> logger)
        {
            _logger = logger;

            _programDataPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData), "VeriketApp");
            _logFilePath = Path.Combine(_programDataPath, "VeriketAppTest.txt");

            _logger.LogInformation("Log dosyasının kaydedileceği konum: {logFilePath}", _logFilePath);
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var interval = TimeSpan.FromMinutes(1);

            while (!stoppingToken.IsCancellationRequested)
            {
                var nextExecutionTime = DateTime.Now.Add(interval);

                LogData();

                await Task.Delay(Math.Max(0, (int)(nextExecutionTime - DateTime.Now).TotalMilliseconds), stoppingToken);
            }
        }

        private void LogData()
        {
            string logData = $"{DateTime.Now} {Environment.MachineName} {Environment.UserName}";

            Directory.CreateDirectory(_programDataPath);
            File.AppendAllText(_logFilePath, logData + Environment.NewLine);

            _logger.LogInformation("Log kaydedildi: {logData}", logData);
        }
    }
}
