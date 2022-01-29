// -- Example to refactor --------------------------------------------------
// class Statistics {
//   public computeSalesStatistics() {
//     // ...
//   }
//   public generateReport() {
//     // ...
//   }
// }

/**
 * Each class has a single reason to change, and therefore just one responsibility.
 * Applying the principle makes our code easier to explain and understand.
 */
class Statistics {
  public computeSalesStatistics() {
    // ...
  }
}
class ReportGenerator {
  public generateReport() {
    // ...
  }
}
