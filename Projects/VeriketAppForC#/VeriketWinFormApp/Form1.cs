using System;
using System.Data;
using System.IO;
using System.Windows.Forms;

namespace VeriketWinFormApp
{
    public partial class Form1 : Form
    {
        private DataGridView dataGridViewLogs;
        private Button btnReadLogs;

        public Form1()
        {
            InitializeComponent();
            InitializeControls();
        }

        private void InitializeControls()
        {
            dataGridViewLogs = new DataGridView
            {
                Name = "dataGridViewLogs",
                Dock = DockStyle.Fill,
                AutoGenerateColumns = true
            };

            btnReadLogs = new Button
            {
                Name = "btnReadLogs",
                Text = "Logları Oku",
                Dock = DockStyle.Bottom,
                Margin = new Padding(15)
            };
            btnReadLogs.Click += btnReadLogs_Click;

            Controls.AddRange(new Control[] { dataGridViewLogs, btnReadLogs });
        }

        private void btnReadLogs_Click(object sender, EventArgs e)
        {
            string commonAppDataFolder = Environment.GetFolderPath(Environment.SpecialFolder.CommonApplicationData);
            string logFilePath = Path.Combine(commonAppDataFolder, "VeriketApp", "VeriketAppTest.txt");

            if (File.Exists(logFilePath))
            {
                DataTable dt = ReadTxtToDataTable(logFilePath);

                if (dt.Rows.Count > 0)
                {
                    dataGridViewLogs.DataSource = dt;
                }
                else
                {
                    MessageBox.Show("Log dosyası boş.", "Bilgi", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
            }
            else
            {
                MessageBox.Show("Log dosyası bulunamadı.", "Hata", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private DataTable ReadTxtToDataTable(string filePath)
        {
            DataTable dataTable = new DataTable();

            try
            {
                using (StreamReader reader = new StreamReader(filePath))
                {
                    dataTable.Columns.Add("Tarih");
                    dataTable.Columns.Add("BilgisayarAdi");
                    dataTable.Columns.Add("KullaniciAdi");

                    while (!reader.EndOfStream)
                    {
                        string line = reader.ReadLine();
                        string[] values = line.Split(' ');

                        if (values.Length == 4)
                        {
                            DataRow row = dataTable.NewRow();
                            row["Tarih"] = values[0] + " " + values[1];
                            row["BilgisayarAdi"] = values[2];
                            row["KullaniciAdi"] = values[3];

                            dataTable.Rows.Add(row);
                        }
                        else
                        {
                            MessageBox.Show($"Log dosyasındaki bir satır beklenen formatta değil: {line}", "Hata", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Hata: {ex.Message}", "Hata", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

            return dataTable;
        }
    }
}
