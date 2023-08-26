const TYPES = {
    Logger: Symbol.for("Logger"),
    Database: Symbol.for("Database"),
    Server: Symbol.for("Server"),
    HTTPRouter: Symbol.for("HTTPRouter"),

    // Impelementation Domain Service
    UserRepository: Symbol.for("UserRepository"),
    RawDataRepository: Symbol.for("RawDataRepository"),
    GeneralDashboardRepository: Symbol.for("GeneralDashboardRepository"),
    DataStockRepository: Symbol.for("DataStockRepository"),
    // Service Layer
    UserService: Symbol.for("UserService"),
    RawDataService: Symbol.for("RawDataService"),
    WebadminAuthService: Symbol.for("WebadminAuthService"),
    GeneralDashboardService: Symbol.for("GeneralDashboardService"),
    DataStockService: Symbol.for("DataStockService"),
};

export { TYPES };
