/**
 * The interface segregation principle states that no client should be forced to
 * depend on methods it does not use. By putting too many properties in our interfaces,
 * we risk breaking the rule.
 */
interface CanEdit {
  edit(): void;
}
interface CanView {
  view(): void;
}
class AdminRole implements CanEdit, CanView {
  public edit() {
    /// ...
  }
  public view() {
    /// ...
  }
}
class BasicRole implements CanView {
  public view() {
    /// ...
  }
}
