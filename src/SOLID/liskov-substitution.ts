/**
 * Subtypes must be substitutable for their base types.
 */
interface IPersistanceService {
  save(entity: any): number;
}
class LocalStoragePersistanceService implements IPersistanceService {
  save(): number {
    var id = Math.floor(Math.random() * 100 + 1);
    // Local storage persistance logic...
    return id;
  }
}

class CookiePersistanceService implements IPersistanceService {
  save(): number {
    var id = Math.floor(Math.random() * 100 + 1);
    // Cookie persistance logic...
    return id;
  }
}

class FavoritesController {
  constructor(private persistanceService: IPersistanceService) {}

  public saveAsFavorite(articleId: number) {
    return this.persistanceService.save(articleId);
  }
}

// FavoritesController is doesn't affected by IPersistanceService.
const favController = new FavoritesController(
  new LocalStoragePersistanceService()
);
// const favController = new FavoritesController(new CookiePersistanceService());
