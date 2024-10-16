
// Target interface: This is the interface the report generator expects.
abstract class ReportData {
  public abstract getData(): Promise<{ temperature: number; pressure: number }>;
}

class JSONDataAdapter extends ReportData {
  public readJSON() {
    return {
      house: {
        metadata: {
          location: 'America',
          time: '2021-01-01T10:00:00Z'
        },
        measurements: {
          temperature: 10,
          pressure: 20
        }
      }
    };
  }

  public async getData(): Promise<{ temperature: number; pressure: number }> {
    const { house: { measurements: { temperature, pressure } } } = this.readJSON();
    return { temperature, pressure };
  }
}

// Adapter for API data source.
class APIDataAdapter extends ReportData {
  public fetchAPIData(): Promise<{
    data: { v1: { temp: number; press: number } }
  }> {
    return Promise.resolve({ data: { v1: { temp: 7, press: 40 } } });
  }

  public async getData(): Promise<{ temperature: number; pressure: number }> {
    const { data: { v1: { temp: temperature, press: pressure } } } = await this.fetchAPIData();
    return { temperature, pressure };
  }
}

// Client: The Report Generator
class ReportGenerator {
  public async generateReport(dataSource: ReportData): Promise<void> {
    const reportData = await dataSource.getData();

    const report = {
      hasHighPressure: reportData.pressure > 30,
      hasHighTemperature: reportData.temperature > 30,
    };

    console.log('Generating report:', report);
  }
}

// Client code
const reportGenerator = new ReportGenerator();

// Using a CSV data source.
const jsonAdapter = new JSONDataAdapter();
reportGenerator.generateReport(jsonAdapter);


// Using an API data source.
const apiAdapter = new APIDataAdapter();
reportGenerator.generateReport(apiAdapter);

export { }
