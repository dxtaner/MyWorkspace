Veriket Application Suite
=========================

Project Structure
-----------------

VeriketAppForC#/  
├── VeriketAppService/  
│ └── Worker.cs # Background service logic  
├── VeriketWinFormApp/  
│ └── Form1.cs # Windows Forms UI  
└── VeriketAppScreenShots/  
├── workerserviceslog.png # Service log screenshot  
├── winform1.png # WinForm screenshot 1  
├── winform2.png # WinForm screenshot 2  
└── winform3.png # WinForm screenshot 3

System Overview
---------------

![System Architecture Diagram](VeriketAppForC#/VeriketAppScreenShots/veriketapptext.png)

Figure 1: Veriket Application System Architecture

VeriketAppService (Background Service)
--------------------------------------

### Service Log Output

![Service Log Output](VeriketAppForC#/VeriketAppScreenShots/workerserviceslog.png)

Figure 2: Service Log Output Example

### Key Components

*   **`Worker.cs`** - Core service logic

*   Runs every minute
*   Logs: Timestamp, Machine Name, Username
*   Automatic folder creation

### Installation

    # Build then install service:
    sc create VeriketAppService binPath="[PATH_TO_EXE]\VeriketAppService.exe"
    sc start VeriketAppService

VeriketWinFormApp (Log Viewer)
------------------------------

### Application Screenshots

![WinForm Main View](VeriketAppForC#/VeriketAppScreenShots/winform1.png)

Figure 3: Main Application Window

![WinForm Log Display](VeriketAppForC#/VeriketAppScreenShots/winform2.png)

Figure 4: Log Data Display

![WinForm Error Handling](VeriketAppForC#/VeriketAppScreenShots/winform3.png)

Figure 5: Error Handling Example

### Key Components

*   **`Form1.cs`** - Main application form

*   DataGridView for log display
*   Button to refresh logs
*   Error handling for file operations

### Usage

1.  Run the executable
2.  Click "Logları Oku" to load logs
3.  View automatically parsed data in columns

Development Notes
-----------------

### Service Implementation (`Worker.cs`)

    // In VeriketAppForC#/VeriketAppService/Worker.cs
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var interval = TimeSpan.FromMinutes(1);  // Configurable interval
        // ...
    }

### WinForms Implementation (`Form1.cs`)

    // In VeriketAppForC#/VeriketWinFormApp/Form1.cs
    private DataTable ReadTxtToDataTable(string filePath)
    {
        // Handles log parsing with validation
        // ...
    }

Troubleshooting
---------------

### Common Issues

**Service not running:**

*   Check Windows Event Viewer
*   Verify service exists: `sc query VeriketAppService`

**Logs not appearing:**

*   Confirm file exists at:
    
    C:\\ProgramData\\VeriketApp\\VeriketAppTest.txt
    
*   Check file permissions

**Format errors:**

*   Ensure each log line has exactly 4 space-separated values
*   Sample valid line:
    
    2023-05-22 14:30:45 WORKSTATION1 UserName
    

Build & Deployment
------------------

1.  Build both projects separately
2.  For service:
    *   Install using Administrator privileges
3.  For WinForms app:
    *   Distribute standalone EXE

License
-------

\[Specify license - e.g., MIT, Proprietary\]
