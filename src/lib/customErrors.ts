/* eslint-disable max-classes-per-file */
const emptyBiomeArray = "EMPTY_BIOME_ARRAY";
const minSuperiorToMax = "MIN_SUPERIOR_TO_MAX";
const invalidMapConfig = "INVALID_MAP_CONFIG";
export type ErrorName = typeof emptyBiomeArray | typeof minSuperiorToMax | typeof invalidMapConfig;

export class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause: string;
  status: number;

  constructor({ name, message, cause, status }: { name: T; message: string; cause?: string; status?: number }) {
    super(message);
    if (this.constructor === ErrorBase) {
      throw new Error("❌ ErrorBase class is abstract and cannot be instantiated");
    }

    this.name = name;
    this.message = message;
    this.cause = cause;
    this.status = status;
  }
}

export class NoBiomeError extends ErrorBase<ErrorName> {
  constructor({ message, cause }: { message?: string; cause?: string }) {
    super({
      name: emptyBiomeArray,
      message: message || "At least one biome must be selected",
      cause,
      status: 400,
    });
  }
}

export class MinMaxError extends ErrorBase<ErrorName> {
  constructor({ message, cause }: { message?: string; cause?: string }) {
    super({
      name: minSuperiorToMax,
      message: message || "Min param must be inferior to max param",
      cause,
      status: 500,
    });
  }
}

export class InvalidMapConfigError extends ErrorBase<ErrorName> {
  constructor({ message, cause }: { message?: string; cause?: string }) {
    super({
      name: invalidMapConfig,
      message: message || "Map config is invalid",
      cause,
      status: 400,
    });
  }
}
