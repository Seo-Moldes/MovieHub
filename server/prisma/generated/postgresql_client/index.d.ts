
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Movies
 * 
 */
export type Movies = $Result.DefaultSelection<Prisma.$MoviesPayload>
/**
 * Model Publicmovies
 * 
 */
export type Publicmovies = $Result.DefaultSelection<Prisma.$PublicmoviesPayload>
/**
 * Model Genres
 * 
 */
export type Genres = $Result.DefaultSelection<Prisma.$GenresPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **Movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.MoviesDelegate<ExtArgs>;

  /**
   * `prisma.publicmovies`: Exposes CRUD operations for the **Publicmovies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicmovies
    * const publicmovies = await prisma.publicmovies.findMany()
    * ```
    */
  get publicmovies(): Prisma.PublicmoviesDelegate<ExtArgs>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.GenresDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Movies: 'Movies',
    Publicmovies: 'Publicmovies',
    Genres: 'Genres'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'movies' | 'publicmovies' | 'genres'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Movies: {
        payload: Prisma.$MoviesPayload<ExtArgs>
        fields: Prisma.MoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findFirst: {
            args: Prisma.MoviesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findMany: {
            args: Prisma.MoviesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          create: {
            args: Prisma.MoviesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          createMany: {
            args: Prisma.MoviesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MoviesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          update: {
            args: Prisma.MoviesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          deleteMany: {
            args: Prisma.MoviesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MoviesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MoviesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.MoviesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoviesCountArgs<ExtArgs>,
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
      Publicmovies: {
        payload: Prisma.$PublicmoviesPayload<ExtArgs>
        fields: Prisma.PublicmoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicmoviesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicmoviesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload>
          }
          findFirst: {
            args: Prisma.PublicmoviesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicmoviesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload>
          }
          findMany: {
            args: Prisma.PublicmoviesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload>[]
          }
          create: {
            args: Prisma.PublicmoviesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload>
          }
          createMany: {
            args: Prisma.PublicmoviesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PublicmoviesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload>
          }
          update: {
            args: Prisma.PublicmoviesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload>
          }
          deleteMany: {
            args: Prisma.PublicmoviesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PublicmoviesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PublicmoviesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicmoviesPayload>
          }
          aggregate: {
            args: Prisma.PublicmoviesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePublicmovies>
          }
          groupBy: {
            args: Prisma.PublicmoviesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PublicmoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicmoviesCountArgs<ExtArgs>,
            result: $Utils.Optional<PublicmoviesCountAggregateOutputType> | number
          }
        }
      }
      Genres: {
        payload: Prisma.$GenresPayload<ExtArgs>
        fields: Prisma.GenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findFirst: {
            args: Prisma.GenresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findMany: {
            args: Prisma.GenresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          create: {
            args: Prisma.GenresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          createMany: {
            args: Prisma.GenresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          update: {
            args: Prisma.GenresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          deleteMany: {
            args: Prisma.GenresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.GenresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenresCountArgs<ExtArgs>,
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    movies: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    movies?: boolean | UsersCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
  }



  /**
   * Count Type MoviesCountOutputType
   */

  export type MoviesCountOutputType = {
    genres: number
  }

  export type MoviesCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    genres?: boolean | MoviesCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCountOutputType
     */
    select?: MoviesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
  }



  /**
   * Count Type PublicmoviesCountOutputType
   */

  export type PublicmoviesCountOutputType = {
    genres: number
  }

  export type PublicmoviesCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    genres?: boolean | PublicmoviesCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes

  /**
   * PublicmoviesCountOutputType without action
   */
  export type PublicmoviesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicmoviesCountOutputType
     */
    select?: PublicmoviesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PublicmoviesCountOutputType without action
   */
  export type PublicmoviesCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    moviesArray: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    moviesArray?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    moviesArray: string[]
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    moviesArray?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movies?: boolean | Users$moviesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    moviesArray?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    movies?: boolean | Users$moviesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      email: string
      moviesArray: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movies<T extends Users$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Users$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly moviesArray: FieldRef<"Users", 'String[]'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.movies
   */
  export type Users$moviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    cursor?: MoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Model Movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    id: number | null
    score: number | null
    year: number | null
    usersId: number | null
  }

  export type MoviesSumAggregateOutputType = {
    id: number | null
    score: number | null
    year: number | null
    usersId: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: number | null
    title: string | null
    score: number | null
    year: number | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: number | null
    imageUrl: string | null
    imageId: string | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    score: number | null
    year: number | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: number | null
    imageUrl: string | null
    imageId: string | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    title: number
    score: number
    year: number
    country: number
    genresArray: number
    createdAt: number
    updatedAt: number
    usersId: number
    imageUrl: number
    imageId: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    id?: true
    score?: true
    year?: true
    usersId?: true
  }

  export type MoviesSumAggregateInputType = {
    id?: true
    score?: true
    year?: true
    usersId?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    title?: true
    score?: true
    year?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
    imageUrl?: true
    imageId?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    title?: true
    score?: true
    year?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
    imageUrl?: true
    imageId?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    title?: true
    score?: true
    year?: true
    country?: true
    genresArray?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
    imageUrl?: true
    imageId?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to aggregate.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type MoviesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithAggregationInput | MoviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: MoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: number
    title: string
    score: number
    year: number
    country: string
    genresArray: string[]
    createdAt: Date | null
    updatedAt: Date | null
    usersId: number | null
    imageUrl: string | null
    imageId: string | null
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends MoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type MoviesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    score?: boolean
    year?: boolean
    country?: boolean
    genresArray?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    imageUrl?: boolean
    imageId?: boolean
    genres?: boolean | Movies$genresArgs<ExtArgs>
    users?: boolean | Movies$usersArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectScalar = {
    id?: boolean
    title?: boolean
    score?: boolean
    year?: boolean
    country?: boolean
    genresArray?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    imageUrl?: boolean
    imageId?: boolean
  }

  export type MoviesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    genres?: boolean | Movies$genresArgs<ExtArgs>
    users?: boolean | Movies$usersArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MoviesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Movies"
    objects: {
      genres: Prisma.$GenresPayload<ExtArgs>[]
      users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      title: string
      score: number
      year: number
      country: string
      genresArray: string[]
      createdAt: Date | null
      updatedAt: Date | null
      usersId: number | null
      imageUrl: string | null
      imageId: string | null
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }


  type MoviesGetPayload<S extends boolean | null | undefined | MoviesDefaultArgs> = $Result.GetResult<Prisma.$MoviesPayload, S>

  type MoviesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MoviesFindManyArgs, 'select' | 'include'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface MoviesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movies'], meta: { name: 'Movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {MoviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MoviesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesFindUniqueArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MoviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MoviesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MoviesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindFirstArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MoviesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MoviesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movies.
     * @param {MoviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
    **/
    create<T extends MoviesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesCreateArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {MoviesCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movies = await prisma.movies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MoviesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movies.
     * @param {MoviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
    **/
    delete<T extends MoviesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesDeleteArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movies.
     * @param {MoviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MoviesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpdateArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MoviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MoviesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MoviesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movies.
     * @param {MoviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
    **/
    upsert<T extends MoviesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpsertArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MoviesCountArgs>(
      args?: Subset<T, MoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesGroupByArgs['orderBy'] }
        : { orderBy?: MoviesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movies model
   */
  readonly fields: MoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    genres<T extends Movies$genresArgs<ExtArgs> = {}>(args?: Subset<T, Movies$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends Movies$usersArgs<ExtArgs> = {}>(args?: Subset<T, Movies$usersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Movies model
   */ 
  interface MoviesFieldRefs {
    readonly id: FieldRef<"Movies", 'Int'>
    readonly title: FieldRef<"Movies", 'String'>
    readonly score: FieldRef<"Movies", 'Int'>
    readonly year: FieldRef<"Movies", 'Int'>
    readonly country: FieldRef<"Movies", 'String'>
    readonly genresArray: FieldRef<"Movies", 'String[]'>
    readonly createdAt: FieldRef<"Movies", 'DateTime'>
    readonly updatedAt: FieldRef<"Movies", 'DateTime'>
    readonly usersId: FieldRef<"Movies", 'Int'>
    readonly imageUrl: FieldRef<"Movies", 'String'>
    readonly imageId: FieldRef<"Movies", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Movies findUnique
   */
  export type MoviesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }


  /**
   * Movies findUniqueOrThrow
   */
  export type MoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }


  /**
   * Movies findFirst
   */
  export type MoviesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * Movies findFirstOrThrow
   */
  export type MoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * Movies findMany
   */
  export type MoviesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }


  /**
   * Movies create
   */
  export type MoviesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a Movies.
     */
    data: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
  }


  /**
   * Movies createMany
   */
  export type MoviesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Movies update
   */
  export type MoviesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a Movies.
     */
    data: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
    /**
     * Choose, which Movies to update.
     */
    where: MoviesWhereUniqueInput
  }


  /**
   * Movies updateMany
   */
  export type MoviesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
  }


  /**
   * Movies upsert
   */
  export type MoviesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the Movies to update in case it exists.
     */
    where: MoviesWhereUniqueInput
    /**
     * In case the Movies found by the `where` argument doesn't exist, create a new Movies with this data.
     */
    create: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
    /**
     * In case the Movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
  }


  /**
   * Movies delete
   */
  export type MoviesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter which Movies to delete.
     */
    where: MoviesWhereUniqueInput
  }


  /**
   * Movies deleteMany
   */
  export type MoviesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MoviesWhereInput
  }


  /**
   * Movies.genres
   */
  export type Movies$genresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    cursor?: GenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Movies.users
   */
  export type Movies$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }


  /**
   * Movies without action
   */
  export type MoviesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
  }



  /**
   * Model Publicmovies
   */

  export type AggregatePublicmovies = {
    _count: PublicmoviesCountAggregateOutputType | null
    _avg: PublicmoviesAvgAggregateOutputType | null
    _sum: PublicmoviesSumAggregateOutputType | null
    _min: PublicmoviesMinAggregateOutputType | null
    _max: PublicmoviesMaxAggregateOutputType | null
  }

  export type PublicmoviesAvgAggregateOutputType = {
    id: number | null
    score: number | null
    year: number | null
  }

  export type PublicmoviesSumAggregateOutputType = {
    id: number | null
    score: number | null
    year: number | null
  }

  export type PublicmoviesMinAggregateOutputType = {
    id: number | null
    title: string | null
    score: number | null
    year: number | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    imageId: string | null
  }

  export type PublicmoviesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    score: number | null
    year: number | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    imageId: string | null
  }

  export type PublicmoviesCountAggregateOutputType = {
    id: number
    title: number
    score: number
    year: number
    country: number
    genresArray: number
    createdAt: number
    updatedAt: number
    imageUrl: number
    imageId: number
    _all: number
  }


  export type PublicmoviesAvgAggregateInputType = {
    id?: true
    score?: true
    year?: true
  }

  export type PublicmoviesSumAggregateInputType = {
    id?: true
    score?: true
    year?: true
  }

  export type PublicmoviesMinAggregateInputType = {
    id?: true
    title?: true
    score?: true
    year?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    imageId?: true
  }

  export type PublicmoviesMaxAggregateInputType = {
    id?: true
    title?: true
    score?: true
    year?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    imageId?: true
  }

  export type PublicmoviesCountAggregateInputType = {
    id?: true
    title?: true
    score?: true
    year?: true
    country?: true
    genresArray?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    imageId?: true
    _all?: true
  }

  export type PublicmoviesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicmovies to aggregate.
     */
    where?: PublicmoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicmovies to fetch.
     */
    orderBy?: PublicmoviesOrderByWithRelationInput | PublicmoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicmoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicmovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicmovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publicmovies
    **/
    _count?: true | PublicmoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicmoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicmoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicmoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicmoviesMaxAggregateInputType
  }

  export type GetPublicmoviesAggregateType<T extends PublicmoviesAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicmovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicmovies[P]>
      : GetScalarType<T[P], AggregatePublicmovies[P]>
  }




  export type PublicmoviesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PublicmoviesWhereInput
    orderBy?: PublicmoviesOrderByWithAggregationInput | PublicmoviesOrderByWithAggregationInput[]
    by: PublicmoviesScalarFieldEnum[] | PublicmoviesScalarFieldEnum
    having?: PublicmoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicmoviesCountAggregateInputType | true
    _avg?: PublicmoviesAvgAggregateInputType
    _sum?: PublicmoviesSumAggregateInputType
    _min?: PublicmoviesMinAggregateInputType
    _max?: PublicmoviesMaxAggregateInputType
  }

  export type PublicmoviesGroupByOutputType = {
    id: number
    title: string
    score: number
    year: number
    country: string
    genresArray: string[]
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    imageId: string | null
    _count: PublicmoviesCountAggregateOutputType | null
    _avg: PublicmoviesAvgAggregateOutputType | null
    _sum: PublicmoviesSumAggregateOutputType | null
    _min: PublicmoviesMinAggregateOutputType | null
    _max: PublicmoviesMaxAggregateOutputType | null
  }

  type GetPublicmoviesGroupByPayload<T extends PublicmoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicmoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicmoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicmoviesGroupByOutputType[P]>
            : GetScalarType<T[P], PublicmoviesGroupByOutputType[P]>
        }
      >
    >


  export type PublicmoviesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    score?: boolean
    year?: boolean
    country?: boolean
    genresArray?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    imageId?: boolean
    genres?: boolean | Publicmovies$genresArgs<ExtArgs>
    _count?: boolean | PublicmoviesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicmovies"]>

  export type PublicmoviesSelectScalar = {
    id?: boolean
    title?: boolean
    score?: boolean
    year?: boolean
    country?: boolean
    genresArray?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    imageId?: boolean
  }

  export type PublicmoviesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    genres?: boolean | Publicmovies$genresArgs<ExtArgs>
    _count?: boolean | PublicmoviesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PublicmoviesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Publicmovies"
    objects: {
      genres: Prisma.$GenresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      title: string
      score: number
      year: number
      country: string
      genresArray: string[]
      createdAt: Date | null
      updatedAt: Date | null
      imageUrl: string | null
      imageId: string | null
    }, ExtArgs["result"]["publicmovies"]>
    composites: {}
  }


  type PublicmoviesGetPayload<S extends boolean | null | undefined | PublicmoviesDefaultArgs> = $Result.GetResult<Prisma.$PublicmoviesPayload, S>

  type PublicmoviesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PublicmoviesFindManyArgs, 'select' | 'include'> & {
      select?: PublicmoviesCountAggregateInputType | true
    }

  export interface PublicmoviesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publicmovies'], meta: { name: 'Publicmovies' } }
    /**
     * Find zero or one Publicmovies that matches the filter.
     * @param {PublicmoviesFindUniqueArgs} args - Arguments to find a Publicmovies
     * @example
     * // Get one Publicmovies
     * const publicmovies = await prisma.publicmovies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicmoviesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PublicmoviesFindUniqueArgs<ExtArgs>>
    ): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Publicmovies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublicmoviesFindUniqueOrThrowArgs} args - Arguments to find a Publicmovies
     * @example
     * // Get one Publicmovies
     * const publicmovies = await prisma.publicmovies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicmoviesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicmoviesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Publicmovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicmoviesFindFirstArgs} args - Arguments to find a Publicmovies
     * @example
     * // Get one Publicmovies
     * const publicmovies = await prisma.publicmovies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicmoviesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicmoviesFindFirstArgs<ExtArgs>>
    ): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Publicmovies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicmoviesFindFirstOrThrowArgs} args - Arguments to find a Publicmovies
     * @example
     * // Get one Publicmovies
     * const publicmovies = await prisma.publicmovies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicmoviesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicmoviesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Publicmovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicmoviesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publicmovies
     * const publicmovies = await prisma.publicmovies.findMany()
     * 
     * // Get first 10 Publicmovies
     * const publicmovies = await prisma.publicmovies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicmoviesWithIdOnly = await prisma.publicmovies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublicmoviesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicmoviesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Publicmovies.
     * @param {PublicmoviesCreateArgs} args - Arguments to create a Publicmovies.
     * @example
     * // Create one Publicmovies
     * const Publicmovies = await prisma.publicmovies.create({
     *   data: {
     *     // ... data to create a Publicmovies
     *   }
     * })
     * 
    **/
    create<T extends PublicmoviesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicmoviesCreateArgs<ExtArgs>>
    ): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Publicmovies.
     *     @param {PublicmoviesCreateManyArgs} args - Arguments to create many Publicmovies.
     *     @example
     *     // Create many Publicmovies
     *     const publicmovies = await prisma.publicmovies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PublicmoviesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicmoviesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Publicmovies.
     * @param {PublicmoviesDeleteArgs} args - Arguments to delete one Publicmovies.
     * @example
     * // Delete one Publicmovies
     * const Publicmovies = await prisma.publicmovies.delete({
     *   where: {
     *     // ... filter to delete one Publicmovies
     *   }
     * })
     * 
    **/
    delete<T extends PublicmoviesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PublicmoviesDeleteArgs<ExtArgs>>
    ): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Publicmovies.
     * @param {PublicmoviesUpdateArgs} args - Arguments to update one Publicmovies.
     * @example
     * // Update one Publicmovies
     * const publicmovies = await prisma.publicmovies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicmoviesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicmoviesUpdateArgs<ExtArgs>>
    ): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Publicmovies.
     * @param {PublicmoviesDeleteManyArgs} args - Arguments to filter Publicmovies to delete.
     * @example
     * // Delete a few Publicmovies
     * const { count } = await prisma.publicmovies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicmoviesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicmoviesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicmovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicmoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publicmovies
     * const publicmovies = await prisma.publicmovies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicmoviesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PublicmoviesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publicmovies.
     * @param {PublicmoviesUpsertArgs} args - Arguments to update or create a Publicmovies.
     * @example
     * // Update or create a Publicmovies
     * const publicmovies = await prisma.publicmovies.upsert({
     *   create: {
     *     // ... data to create a Publicmovies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publicmovies we want to update
     *   }
     * })
    **/
    upsert<T extends PublicmoviesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PublicmoviesUpsertArgs<ExtArgs>>
    ): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Publicmovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicmoviesCountArgs} args - Arguments to filter Publicmovies to count.
     * @example
     * // Count the number of Publicmovies
     * const count = await prisma.publicmovies.count({
     *   where: {
     *     // ... the filter for the Publicmovies we want to count
     *   }
     * })
    **/
    count<T extends PublicmoviesCountArgs>(
      args?: Subset<T, PublicmoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicmoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publicmovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicmoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicmoviesAggregateArgs>(args: Subset<T, PublicmoviesAggregateArgs>): Prisma.PrismaPromise<GetPublicmoviesAggregateType<T>>

    /**
     * Group by Publicmovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicmoviesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicmoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicmoviesGroupByArgs['orderBy'] }
        : { orderBy?: PublicmoviesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicmoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicmoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publicmovies model
   */
  readonly fields: PublicmoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publicmovies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicmoviesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    genres<T extends Publicmovies$genresArgs<ExtArgs> = {}>(args?: Subset<T, Publicmovies$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Publicmovies model
   */ 
  interface PublicmoviesFieldRefs {
    readonly id: FieldRef<"Publicmovies", 'Int'>
    readonly title: FieldRef<"Publicmovies", 'String'>
    readonly score: FieldRef<"Publicmovies", 'Int'>
    readonly year: FieldRef<"Publicmovies", 'Int'>
    readonly country: FieldRef<"Publicmovies", 'String'>
    readonly genresArray: FieldRef<"Publicmovies", 'String[]'>
    readonly createdAt: FieldRef<"Publicmovies", 'DateTime'>
    readonly updatedAt: FieldRef<"Publicmovies", 'DateTime'>
    readonly imageUrl: FieldRef<"Publicmovies", 'String'>
    readonly imageId: FieldRef<"Publicmovies", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Publicmovies findUnique
   */
  export type PublicmoviesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * Filter, which Publicmovies to fetch.
     */
    where: PublicmoviesWhereUniqueInput
  }


  /**
   * Publicmovies findUniqueOrThrow
   */
  export type PublicmoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * Filter, which Publicmovies to fetch.
     */
    where: PublicmoviesWhereUniqueInput
  }


  /**
   * Publicmovies findFirst
   */
  export type PublicmoviesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * Filter, which Publicmovies to fetch.
     */
    where?: PublicmoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicmovies to fetch.
     */
    orderBy?: PublicmoviesOrderByWithRelationInput | PublicmoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicmovies.
     */
    cursor?: PublicmoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicmovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicmovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicmovies.
     */
    distinct?: PublicmoviesScalarFieldEnum | PublicmoviesScalarFieldEnum[]
  }


  /**
   * Publicmovies findFirstOrThrow
   */
  export type PublicmoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * Filter, which Publicmovies to fetch.
     */
    where?: PublicmoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicmovies to fetch.
     */
    orderBy?: PublicmoviesOrderByWithRelationInput | PublicmoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicmovies.
     */
    cursor?: PublicmoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicmovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicmovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicmovies.
     */
    distinct?: PublicmoviesScalarFieldEnum | PublicmoviesScalarFieldEnum[]
  }


  /**
   * Publicmovies findMany
   */
  export type PublicmoviesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * Filter, which Publicmovies to fetch.
     */
    where?: PublicmoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicmovies to fetch.
     */
    orderBy?: PublicmoviesOrderByWithRelationInput | PublicmoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publicmovies.
     */
    cursor?: PublicmoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicmovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicmovies.
     */
    skip?: number
    distinct?: PublicmoviesScalarFieldEnum | PublicmoviesScalarFieldEnum[]
  }


  /**
   * Publicmovies create
   */
  export type PublicmoviesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a Publicmovies.
     */
    data: XOR<PublicmoviesCreateInput, PublicmoviesUncheckedCreateInput>
  }


  /**
   * Publicmovies createMany
   */
  export type PublicmoviesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publicmovies.
     */
    data: PublicmoviesCreateManyInput | PublicmoviesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Publicmovies update
   */
  export type PublicmoviesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a Publicmovies.
     */
    data: XOR<PublicmoviesUpdateInput, PublicmoviesUncheckedUpdateInput>
    /**
     * Choose, which Publicmovies to update.
     */
    where: PublicmoviesWhereUniqueInput
  }


  /**
   * Publicmovies updateMany
   */
  export type PublicmoviesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publicmovies.
     */
    data: XOR<PublicmoviesUpdateManyMutationInput, PublicmoviesUncheckedUpdateManyInput>
    /**
     * Filter which Publicmovies to update
     */
    where?: PublicmoviesWhereInput
  }


  /**
   * Publicmovies upsert
   */
  export type PublicmoviesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the Publicmovies to update in case it exists.
     */
    where: PublicmoviesWhereUniqueInput
    /**
     * In case the Publicmovies found by the `where` argument doesn't exist, create a new Publicmovies with this data.
     */
    create: XOR<PublicmoviesCreateInput, PublicmoviesUncheckedCreateInput>
    /**
     * In case the Publicmovies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicmoviesUpdateInput, PublicmoviesUncheckedUpdateInput>
  }


  /**
   * Publicmovies delete
   */
  export type PublicmoviesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    /**
     * Filter which Publicmovies to delete.
     */
    where: PublicmoviesWhereUniqueInput
  }


  /**
   * Publicmovies deleteMany
   */
  export type PublicmoviesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicmovies to delete
     */
    where?: PublicmoviesWhereInput
  }


  /**
   * Publicmovies.genres
   */
  export type Publicmovies$genresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    cursor?: GenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Publicmovies without action
   */
  export type PublicmoviesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
  }



  /**
   * Model Genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
    moviesId: number | null
    publicmoviesId: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
    moviesId: number | null
    publicmoviesId: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    genre: string | null
    createdAt: Date | null
    updatedAt: Date | null
    moviesId: number | null
    publicmoviesId: number | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    genre: string | null
    createdAt: Date | null
    updatedAt: Date | null
    moviesId: number | null
    publicmoviesId: number | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    genre: number
    createdAt: number
    updatedAt: number
    moviesId: number
    publicmoviesId: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
    moviesId?: true
    publicmoviesId?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
    moviesId?: true
    publicmoviesId?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
    moviesId?: true
    publicmoviesId?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
    moviesId?: true
    publicmoviesId?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    genre?: true
    createdAt?: true
    updatedAt?: true
    moviesId?: true
    publicmoviesId?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to aggregate.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type GenresGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithAggregationInput | GenresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: GenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: number
    genre: string
    createdAt: Date
    updatedAt: Date
    moviesId: number | null
    publicmoviesId: number | null
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type GenresSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moviesId?: boolean
    publicmoviesId?: boolean
    movies?: boolean | Genres$moviesArgs<ExtArgs>
    Publicmovies?: boolean | Genres$PublicmoviesArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectScalar = {
    id?: boolean
    genre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moviesId?: boolean
    publicmoviesId?: boolean
  }

  export type GenresInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    movies?: boolean | Genres$moviesArgs<ExtArgs>
    Publicmovies?: boolean | Genres$PublicmoviesArgs<ExtArgs>
  }


  export type $GenresPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Genres"
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs> | null
      Publicmovies: Prisma.$PublicmoviesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      genre: string
      createdAt: Date
      updatedAt: Date
      moviesId: number | null
      publicmoviesId: number | null
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }


  type GenresGetPayload<S extends boolean | null | undefined | GenresDefaultArgs> = $Result.GetResult<Prisma.$GenresPayload, S>

  type GenresCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GenresFindManyArgs, 'select' | 'include'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface GenresDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genres'], meta: { name: 'Genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenresFindUniqueArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genres that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindFirstArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
    **/
    create<T extends GenresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenresCreateArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenresCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genres = await prisma.genres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
    **/
    delete<T extends GenresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenresDeleteArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpdateArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
    **/
    upsert<T extends GenresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpsertArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genres model
   */
  readonly fields: GenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenresClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movies<T extends Genres$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Genres$moviesArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Publicmovies<T extends Genres$PublicmoviesArgs<ExtArgs> = {}>(args?: Subset<T, Genres$PublicmoviesArgs<ExtArgs>>): Prisma__PublicmoviesClient<$Result.GetResult<Prisma.$PublicmoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Genres model
   */ 
  interface GenresFieldRefs {
    readonly id: FieldRef<"Genres", 'Int'>
    readonly genre: FieldRef<"Genres", 'String'>
    readonly createdAt: FieldRef<"Genres", 'DateTime'>
    readonly updatedAt: FieldRef<"Genres", 'DateTime'>
    readonly moviesId: FieldRef<"Genres", 'Int'>
    readonly publicmoviesId: FieldRef<"Genres", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres findUniqueOrThrow
   */
  export type GenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres findFirstOrThrow
   */
  export type GenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres findMany
   */
  export type GenresFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres create
   */
  export type GenresCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to create a Genres.
     */
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>
  }


  /**
   * Genres createMany
   */
  export type GenresCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Genres update
   */
  export type GenresUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to update a Genres.
     */
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
    /**
     * Choose, which Genres to update.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
  }


  /**
   * Genres upsert
   */
  export type GenresUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The filter to search for the Genres to update in case it exists.
     */
    where: GenresWhereUniqueInput
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     */
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
  }


  /**
   * Genres delete
   */
  export type GenresDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter which Genres to delete.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenresWhereInput
  }


  /**
   * Genres.movies
   */
  export type Genres$moviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
  }


  /**
   * Genres.Publicmovies
   */
  export type Genres$PublicmoviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicmovies
     */
    select?: PublicmoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicmoviesInclude<ExtArgs> | null
    where?: PublicmoviesWhereInput
  }


  /**
   * Genres without action
   */
  export type GenresDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    moviesArray: 'moviesArray',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    score: 'score',
    year: 'year',
    country: 'country',
    genresArray: 'genresArray',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usersId: 'usersId',
    imageUrl: 'imageUrl',
    imageId: 'imageId'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const PublicmoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    score: 'score',
    year: 'year',
    country: 'country',
    genresArray: 'genresArray',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageUrl: 'imageUrl',
    imageId: 'imageId'
  };

  export type PublicmoviesScalarFieldEnum = (typeof PublicmoviesScalarFieldEnum)[keyof typeof PublicmoviesScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    genre: 'genre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    moviesId: 'moviesId',
    publicmoviesId: 'publicmoviesId'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    moviesArray?: StringNullableListFilter<"Users">
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    movies?: MoviesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    moviesArray?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movies?: MoviesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    moviesArray?: StringNullableListFilter<"Users">
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    movies?: MoviesListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    moviesArray?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    moviesArray?: StringNullableListFilter<"Users">
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type MoviesWhereInput = {
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    id?: IntFilter<"Movies"> | number
    title?: StringFilter<"Movies"> | string
    score?: IntFilter<"Movies"> | number
    year?: IntFilter<"Movies"> | number
    country?: StringFilter<"Movies"> | string
    genresArray?: StringNullableListFilter<"Movies">
    createdAt?: DateTimeNullableFilter<"Movies"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Movies"> | Date | string | null
    usersId?: IntNullableFilter<"Movies"> | number | null
    imageUrl?: StringNullableFilter<"Movies"> | string | null
    imageId?: StringNullableFilter<"Movies"> | string | null
    genres?: GenresListRelationFilter
    users?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
  }

  export type MoviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    genresArray?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    usersId?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    genres?: GenresOrderByRelationAggregateInput
    users?: UsersOrderByWithRelationInput
  }

  export type MoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    title?: StringFilter<"Movies"> | string
    score?: IntFilter<"Movies"> | number
    year?: IntFilter<"Movies"> | number
    country?: StringFilter<"Movies"> | string
    genresArray?: StringNullableListFilter<"Movies">
    createdAt?: DateTimeNullableFilter<"Movies"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Movies"> | Date | string | null
    usersId?: IntNullableFilter<"Movies"> | number | null
    imageUrl?: StringNullableFilter<"Movies"> | string | null
    imageId?: StringNullableFilter<"Movies"> | string | null
    genres?: GenresListRelationFilter
    users?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
  }, "id">

  export type MoviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    genresArray?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    usersId?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    _count?: MoviesCountOrderByAggregateInput
    _avg?: MoviesAvgOrderByAggregateInput
    _max?: MoviesMaxOrderByAggregateInput
    _min?: MoviesMinOrderByAggregateInput
    _sum?: MoviesSumOrderByAggregateInput
  }

  export type MoviesScalarWhereWithAggregatesInput = {
    AND?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    OR?: MoviesScalarWhereWithAggregatesInput[]
    NOT?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movies"> | number
    title?: StringWithAggregatesFilter<"Movies"> | string
    score?: IntWithAggregatesFilter<"Movies"> | number
    year?: IntWithAggregatesFilter<"Movies"> | number
    country?: StringWithAggregatesFilter<"Movies"> | string
    genresArray?: StringNullableListFilter<"Movies">
    createdAt?: DateTimeNullableWithAggregatesFilter<"Movies"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Movies"> | Date | string | null
    usersId?: IntNullableWithAggregatesFilter<"Movies"> | number | null
    imageUrl?: StringNullableWithAggregatesFilter<"Movies"> | string | null
    imageId?: StringNullableWithAggregatesFilter<"Movies"> | string | null
  }

  export type PublicmoviesWhereInput = {
    AND?: PublicmoviesWhereInput | PublicmoviesWhereInput[]
    OR?: PublicmoviesWhereInput[]
    NOT?: PublicmoviesWhereInput | PublicmoviesWhereInput[]
    id?: IntFilter<"Publicmovies"> | number
    title?: StringFilter<"Publicmovies"> | string
    score?: IntFilter<"Publicmovies"> | number
    year?: IntFilter<"Publicmovies"> | number
    country?: StringFilter<"Publicmovies"> | string
    genresArray?: StringNullableListFilter<"Publicmovies">
    createdAt?: DateTimeNullableFilter<"Publicmovies"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Publicmovies"> | Date | string | null
    imageUrl?: StringNullableFilter<"Publicmovies"> | string | null
    imageId?: StringNullableFilter<"Publicmovies"> | string | null
    genres?: GenresListRelationFilter
  }

  export type PublicmoviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    genresArray?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    genres?: GenresOrderByRelationAggregateInput
  }

  export type PublicmoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicmoviesWhereInput | PublicmoviesWhereInput[]
    OR?: PublicmoviesWhereInput[]
    NOT?: PublicmoviesWhereInput | PublicmoviesWhereInput[]
    title?: StringFilter<"Publicmovies"> | string
    score?: IntFilter<"Publicmovies"> | number
    year?: IntFilter<"Publicmovies"> | number
    country?: StringFilter<"Publicmovies"> | string
    genresArray?: StringNullableListFilter<"Publicmovies">
    createdAt?: DateTimeNullableFilter<"Publicmovies"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Publicmovies"> | Date | string | null
    imageUrl?: StringNullableFilter<"Publicmovies"> | string | null
    imageId?: StringNullableFilter<"Publicmovies"> | string | null
    genres?: GenresListRelationFilter
  }, "id">

  export type PublicmoviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    genresArray?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    _count?: PublicmoviesCountOrderByAggregateInput
    _avg?: PublicmoviesAvgOrderByAggregateInput
    _max?: PublicmoviesMaxOrderByAggregateInput
    _min?: PublicmoviesMinOrderByAggregateInput
    _sum?: PublicmoviesSumOrderByAggregateInput
  }

  export type PublicmoviesScalarWhereWithAggregatesInput = {
    AND?: PublicmoviesScalarWhereWithAggregatesInput | PublicmoviesScalarWhereWithAggregatesInput[]
    OR?: PublicmoviesScalarWhereWithAggregatesInput[]
    NOT?: PublicmoviesScalarWhereWithAggregatesInput | PublicmoviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publicmovies"> | number
    title?: StringWithAggregatesFilter<"Publicmovies"> | string
    score?: IntWithAggregatesFilter<"Publicmovies"> | number
    year?: IntWithAggregatesFilter<"Publicmovies"> | number
    country?: StringWithAggregatesFilter<"Publicmovies"> | string
    genresArray?: StringNullableListFilter<"Publicmovies">
    createdAt?: DateTimeNullableWithAggregatesFilter<"Publicmovies"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Publicmovies"> | Date | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Publicmovies"> | string | null
    imageId?: StringNullableWithAggregatesFilter<"Publicmovies"> | string | null
  }

  export type GenresWhereInput = {
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    id?: IntFilter<"Genres"> | number
    genre?: StringFilter<"Genres"> | string
    createdAt?: DateTimeFilter<"Genres"> | Date | string
    updatedAt?: DateTimeFilter<"Genres"> | Date | string
    moviesId?: IntNullableFilter<"Genres"> | number | null
    publicmoviesId?: IntNullableFilter<"Genres"> | number | null
    movies?: XOR<MoviesNullableRelationFilter, MoviesWhereInput> | null
    Publicmovies?: XOR<PublicmoviesNullableRelationFilter, PublicmoviesWhereInput> | null
  }

  export type GenresOrderByWithRelationInput = {
    id?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moviesId?: SortOrderInput | SortOrder
    publicmoviesId?: SortOrderInput | SortOrder
    movies?: MoviesOrderByWithRelationInput
    Publicmovies?: PublicmoviesOrderByWithRelationInput
  }

  export type GenresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    genre?: string
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    createdAt?: DateTimeFilter<"Genres"> | Date | string
    updatedAt?: DateTimeFilter<"Genres"> | Date | string
    moviesId?: IntNullableFilter<"Genres"> | number | null
    publicmoviesId?: IntNullableFilter<"Genres"> | number | null
    movies?: XOR<MoviesNullableRelationFilter, MoviesWhereInput> | null
    Publicmovies?: XOR<PublicmoviesNullableRelationFilter, PublicmoviesWhereInput> | null
  }, "id" | "genre">

  export type GenresOrderByWithAggregationInput = {
    id?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moviesId?: SortOrderInput | SortOrder
    publicmoviesId?: SortOrderInput | SortOrder
    _count?: GenresCountOrderByAggregateInput
    _avg?: GenresAvgOrderByAggregateInput
    _max?: GenresMaxOrderByAggregateInput
    _min?: GenresMinOrderByAggregateInput
    _sum?: GenresSumOrderByAggregateInput
  }

  export type GenresScalarWhereWithAggregatesInput = {
    AND?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    OR?: GenresScalarWhereWithAggregatesInput[]
    NOT?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genres"> | number
    genre?: StringWithAggregatesFilter<"Genres"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Genres"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genres"> | Date | string
    moviesId?: IntNullableWithAggregatesFilter<"Genres"> | number | null
    publicmoviesId?: IntNullableWithAggregatesFilter<"Genres"> | number | null
  }

  export type UsersCreateInput = {
    name: string
    email: string
    moviesArray?: UsersCreatemoviesArrayInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MoviesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    moviesArray?: UsersCreatemoviesArrayInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MoviesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    moviesArray?: UsersUpdatemoviesArrayInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    moviesArray?: UsersUpdatemoviesArrayInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    moviesArray?: UsersCreatemoviesArrayInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    moviesArray?: UsersUpdatemoviesArrayInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    moviesArray?: UsersUpdatemoviesArrayInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviesCreateInput = {
    title: string
    score: number
    year: number
    country: string
    genresArray?: MoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
    genres?: GenresCreateNestedManyWithoutMoviesInput
    users?: UsersCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateInput = {
    id?: number
    title: string
    score: number
    year: number
    country: string
    genresArray?: MoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    usersId?: number | null
    imageUrl?: string | null
    imageId?: string | null
    genres?: GenresUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenresUpdateManyWithoutMoviesNestedInput
    users?: UsersUpdateOneWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenresUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesCreateManyInput = {
    id?: number
    title: string
    score: number
    year: number
    country: string
    genresArray?: MoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    usersId?: number | null
    imageUrl?: string | null
    imageId?: string | null
  }

  export type MoviesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MoviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicmoviesCreateInput = {
    title: string
    score: number
    year: number
    country: string
    genresArray?: PublicmoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
    genres?: GenresCreateNestedManyWithoutPublicmoviesInput
  }

  export type PublicmoviesUncheckedCreateInput = {
    id?: number
    title: string
    score: number
    year: number
    country: string
    genresArray?: PublicmoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
    genres?: GenresUncheckedCreateNestedManyWithoutPublicmoviesInput
  }

  export type PublicmoviesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: PublicmoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenresUpdateManyWithoutPublicmoviesNestedInput
  }

  export type PublicmoviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: PublicmoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenresUncheckedUpdateManyWithoutPublicmoviesNestedInput
  }

  export type PublicmoviesCreateManyInput = {
    id?: number
    title: string
    score: number
    year: number
    country: string
    genresArray?: PublicmoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
  }

  export type PublicmoviesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: PublicmoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicmoviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: PublicmoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenresCreateInput = {
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MoviesCreateNestedOneWithoutGenresInput
    Publicmovies?: PublicmoviesCreateNestedOneWithoutGenresInput
  }

  export type GenresUncheckedCreateInput = {
    id?: number
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moviesId?: number | null
    publicmoviesId?: number | null
  }

  export type GenresUpdateInput = {
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUpdateOneWithoutGenresNestedInput
    Publicmovies?: PublicmoviesUpdateOneWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moviesId?: NullableIntFieldUpdateOperationsInput | number | null
    publicmoviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GenresCreateManyInput = {
    id?: number
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moviesId?: number | null
    publicmoviesId?: number | null
  }

  export type GenresUpdateManyMutationInput = {
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moviesId?: NullableIntFieldUpdateOperationsInput | number | null
    publicmoviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MoviesListRelationFilter = {
    every?: MoviesWhereInput
    some?: MoviesWhereInput
    none?: MoviesWhereInput
  }

  export type MoviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    moviesArray?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GenresListRelationFilter = {
    every?: GenresWhereInput
    some?: GenresWhereInput
    none?: GenresWhereInput
  }

  export type UsersNullableRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    genresArray?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
    imageUrl?: SortOrder
    imageId?: SortOrder
  }

  export type MoviesAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    year?: SortOrder
    usersId?: SortOrder
  }

  export type MoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
    imageUrl?: SortOrder
    imageId?: SortOrder
  }

  export type MoviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
    imageUrl?: SortOrder
    imageId?: SortOrder
  }

  export type MoviesSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    year?: SortOrder
    usersId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PublicmoviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    genresArray?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    imageId?: SortOrder
  }

  export type PublicmoviesAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    year?: SortOrder
  }

  export type PublicmoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    imageId?: SortOrder
  }

  export type PublicmoviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    year?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    imageId?: SortOrder
  }

  export type PublicmoviesSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    year?: SortOrder
  }

  export type MoviesNullableRelationFilter = {
    is?: MoviesWhereInput | null
    isNot?: MoviesWhereInput | null
  }

  export type PublicmoviesNullableRelationFilter = {
    is?: PublicmoviesWhereInput | null
    isNot?: PublicmoviesWhereInput | null
  }

  export type GenresCountOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moviesId?: SortOrder
    publicmoviesId?: SortOrder
  }

  export type GenresAvgOrderByAggregateInput = {
    id?: SortOrder
    moviesId?: SortOrder
    publicmoviesId?: SortOrder
  }

  export type GenresMaxOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moviesId?: SortOrder
    publicmoviesId?: SortOrder
  }

  export type GenresMinOrderByAggregateInput = {
    id?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moviesId?: SortOrder
    publicmoviesId?: SortOrder
  }

  export type GenresSumOrderByAggregateInput = {
    id?: SortOrder
    moviesId?: SortOrder
    publicmoviesId?: SortOrder
  }

  export type UsersCreatemoviesArrayInput = {
    set: string[]
  }

  export type MoviesCreateNestedManyWithoutUsersInput = {
    create?: XOR<MoviesCreateWithoutUsersInput, MoviesUncheckedCreateWithoutUsersInput> | MoviesCreateWithoutUsersInput[] | MoviesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUsersInput | MoviesCreateOrConnectWithoutUsersInput[]
    createMany?: MoviesCreateManyUsersInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type MoviesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<MoviesCreateWithoutUsersInput, MoviesUncheckedCreateWithoutUsersInput> | MoviesCreateWithoutUsersInput[] | MoviesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUsersInput | MoviesCreateOrConnectWithoutUsersInput[]
    createMany?: MoviesCreateManyUsersInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsersUpdatemoviesArrayInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MoviesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MoviesCreateWithoutUsersInput, MoviesUncheckedCreateWithoutUsersInput> | MoviesCreateWithoutUsersInput[] | MoviesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUsersInput | MoviesCreateOrConnectWithoutUsersInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutUsersInput | MoviesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: MoviesCreateManyUsersInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutUsersInput | MoviesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutUsersInput | MoviesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MoviesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MoviesCreateWithoutUsersInput, MoviesUncheckedCreateWithoutUsersInput> | MoviesCreateWithoutUsersInput[] | MoviesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUsersInput | MoviesCreateOrConnectWithoutUsersInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutUsersInput | MoviesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: MoviesCreateManyUsersInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutUsersInput | MoviesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutUsersInput | MoviesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type MoviesCreategenresArrayInput = {
    set: string[]
  }

  export type GenresCreateNestedManyWithoutMoviesInput = {
    create?: XOR<GenresCreateWithoutMoviesInput, GenresUncheckedCreateWithoutMoviesInput> | GenresCreateWithoutMoviesInput[] | GenresUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutMoviesInput | GenresCreateOrConnectWithoutMoviesInput[]
    createMany?: GenresCreateManyMoviesInputEnvelope
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutMoviesInput = {
    create?: XOR<UsersCreateWithoutMoviesInput, UsersUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMoviesInput
    connect?: UsersWhereUniqueInput
  }

  export type GenresUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<GenresCreateWithoutMoviesInput, GenresUncheckedCreateWithoutMoviesInput> | GenresCreateWithoutMoviesInput[] | GenresUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutMoviesInput | GenresCreateOrConnectWithoutMoviesInput[]
    createMany?: GenresCreateManyMoviesInputEnvelope
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type MoviesUpdategenresArrayInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GenresUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<GenresCreateWithoutMoviesInput, GenresUncheckedCreateWithoutMoviesInput> | GenresCreateWithoutMoviesInput[] | GenresUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutMoviesInput | GenresCreateOrConnectWithoutMoviesInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutMoviesInput | GenresUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: GenresCreateManyMoviesInputEnvelope
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutMoviesInput | GenresUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutMoviesInput | GenresUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutMoviesNestedInput = {
    create?: XOR<UsersCreateWithoutMoviesInput, UsersUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMoviesInput
    upsert?: UsersUpsertWithoutMoviesInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMoviesInput, UsersUpdateWithoutMoviesInput>, UsersUncheckedUpdateWithoutMoviesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GenresUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<GenresCreateWithoutMoviesInput, GenresUncheckedCreateWithoutMoviesInput> | GenresCreateWithoutMoviesInput[] | GenresUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutMoviesInput | GenresCreateOrConnectWithoutMoviesInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutMoviesInput | GenresUpsertWithWhereUniqueWithoutMoviesInput[]
    createMany?: GenresCreateManyMoviesInputEnvelope
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutMoviesInput | GenresUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutMoviesInput | GenresUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type PublicmoviesCreategenresArrayInput = {
    set: string[]
  }

  export type GenresCreateNestedManyWithoutPublicmoviesInput = {
    create?: XOR<GenresCreateWithoutPublicmoviesInput, GenresUncheckedCreateWithoutPublicmoviesInput> | GenresCreateWithoutPublicmoviesInput[] | GenresUncheckedCreateWithoutPublicmoviesInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutPublicmoviesInput | GenresCreateOrConnectWithoutPublicmoviesInput[]
    createMany?: GenresCreateManyPublicmoviesInputEnvelope
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type GenresUncheckedCreateNestedManyWithoutPublicmoviesInput = {
    create?: XOR<GenresCreateWithoutPublicmoviesInput, GenresUncheckedCreateWithoutPublicmoviesInput> | GenresCreateWithoutPublicmoviesInput[] | GenresUncheckedCreateWithoutPublicmoviesInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutPublicmoviesInput | GenresCreateOrConnectWithoutPublicmoviesInput[]
    createMany?: GenresCreateManyPublicmoviesInputEnvelope
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type PublicmoviesUpdategenresArrayInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GenresUpdateManyWithoutPublicmoviesNestedInput = {
    create?: XOR<GenresCreateWithoutPublicmoviesInput, GenresUncheckedCreateWithoutPublicmoviesInput> | GenresCreateWithoutPublicmoviesInput[] | GenresUncheckedCreateWithoutPublicmoviesInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutPublicmoviesInput | GenresCreateOrConnectWithoutPublicmoviesInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutPublicmoviesInput | GenresUpsertWithWhereUniqueWithoutPublicmoviesInput[]
    createMany?: GenresCreateManyPublicmoviesInputEnvelope
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutPublicmoviesInput | GenresUpdateWithWhereUniqueWithoutPublicmoviesInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutPublicmoviesInput | GenresUpdateManyWithWhereWithoutPublicmoviesInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type GenresUncheckedUpdateManyWithoutPublicmoviesNestedInput = {
    create?: XOR<GenresCreateWithoutPublicmoviesInput, GenresUncheckedCreateWithoutPublicmoviesInput> | GenresCreateWithoutPublicmoviesInput[] | GenresUncheckedCreateWithoutPublicmoviesInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutPublicmoviesInput | GenresCreateOrConnectWithoutPublicmoviesInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutPublicmoviesInput | GenresUpsertWithWhereUniqueWithoutPublicmoviesInput[]
    createMany?: GenresCreateManyPublicmoviesInputEnvelope
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutPublicmoviesInput | GenresUpdateWithWhereUniqueWithoutPublicmoviesInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutPublicmoviesInput | GenresUpdateManyWithWhereWithoutPublicmoviesInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type MoviesCreateNestedOneWithoutGenresInput = {
    create?: XOR<MoviesCreateWithoutGenresInput, MoviesUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutGenresInput
    connect?: MoviesWhereUniqueInput
  }

  export type PublicmoviesCreateNestedOneWithoutGenresInput = {
    create?: XOR<PublicmoviesCreateWithoutGenresInput, PublicmoviesUncheckedCreateWithoutGenresInput>
    connectOrCreate?: PublicmoviesCreateOrConnectWithoutGenresInput
    connect?: PublicmoviesWhereUniqueInput
  }

  export type MoviesUpdateOneWithoutGenresNestedInput = {
    create?: XOR<MoviesCreateWithoutGenresInput, MoviesUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutGenresInput
    upsert?: MoviesUpsertWithoutGenresInput
    disconnect?: MoviesWhereInput | boolean
    delete?: MoviesWhereInput | boolean
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutGenresInput, MoviesUpdateWithoutGenresInput>, MoviesUncheckedUpdateWithoutGenresInput>
  }

  export type PublicmoviesUpdateOneWithoutGenresNestedInput = {
    create?: XOR<PublicmoviesCreateWithoutGenresInput, PublicmoviesUncheckedCreateWithoutGenresInput>
    connectOrCreate?: PublicmoviesCreateOrConnectWithoutGenresInput
    upsert?: PublicmoviesUpsertWithoutGenresInput
    disconnect?: PublicmoviesWhereInput | boolean
    delete?: PublicmoviesWhereInput | boolean
    connect?: PublicmoviesWhereUniqueInput
    update?: XOR<XOR<PublicmoviesUpdateToOneWithWhereWithoutGenresInput, PublicmoviesUpdateWithoutGenresInput>, PublicmoviesUncheckedUpdateWithoutGenresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MoviesCreateWithoutUsersInput = {
    title: string
    score: number
    year: number
    country: string
    genresArray?: MoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
    genres?: GenresCreateNestedManyWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    score: number
    year: number
    country: string
    genresArray?: MoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
    genres?: GenresUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesCreateOrConnectWithoutUsersInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutUsersInput, MoviesUncheckedCreateWithoutUsersInput>
  }

  export type MoviesCreateManyUsersInputEnvelope = {
    data: MoviesCreateManyUsersInput | MoviesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type MoviesUpsertWithWhereUniqueWithoutUsersInput = {
    where: MoviesWhereUniqueInput
    update: XOR<MoviesUpdateWithoutUsersInput, MoviesUncheckedUpdateWithoutUsersInput>
    create: XOR<MoviesCreateWithoutUsersInput, MoviesUncheckedCreateWithoutUsersInput>
  }

  export type MoviesUpdateWithWhereUniqueWithoutUsersInput = {
    where: MoviesWhereUniqueInput
    data: XOR<MoviesUpdateWithoutUsersInput, MoviesUncheckedUpdateWithoutUsersInput>
  }

  export type MoviesUpdateManyWithWhereWithoutUsersInput = {
    where: MoviesScalarWhereInput
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyWithoutUsersInput>
  }

  export type MoviesScalarWhereInput = {
    AND?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    OR?: MoviesScalarWhereInput[]
    NOT?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    id?: IntFilter<"Movies"> | number
    title?: StringFilter<"Movies"> | string
    score?: IntFilter<"Movies"> | number
    year?: IntFilter<"Movies"> | number
    country?: StringFilter<"Movies"> | string
    genresArray?: StringNullableListFilter<"Movies">
    createdAt?: DateTimeNullableFilter<"Movies"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Movies"> | Date | string | null
    usersId?: IntNullableFilter<"Movies"> | number | null
    imageUrl?: StringNullableFilter<"Movies"> | string | null
    imageId?: StringNullableFilter<"Movies"> | string | null
  }

  export type GenresCreateWithoutMoviesInput = {
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Publicmovies?: PublicmoviesCreateNestedOneWithoutGenresInput
  }

  export type GenresUncheckedCreateWithoutMoviesInput = {
    id?: number
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publicmoviesId?: number | null
  }

  export type GenresCreateOrConnectWithoutMoviesInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutMoviesInput, GenresUncheckedCreateWithoutMoviesInput>
  }

  export type GenresCreateManyMoviesInputEnvelope = {
    data: GenresCreateManyMoviesInput | GenresCreateManyMoviesInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutMoviesInput = {
    name: string
    email: string
    moviesArray?: UsersCreatemoviesArrayInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
    email: string
    moviesArray?: UsersCreatemoviesArrayInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersCreateOrConnectWithoutMoviesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMoviesInput, UsersUncheckedCreateWithoutMoviesInput>
  }

  export type GenresUpsertWithWhereUniqueWithoutMoviesInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutMoviesInput, GenresUncheckedUpdateWithoutMoviesInput>
    create: XOR<GenresCreateWithoutMoviesInput, GenresUncheckedCreateWithoutMoviesInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutMoviesInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutMoviesInput, GenresUncheckedUpdateWithoutMoviesInput>
  }

  export type GenresUpdateManyWithWhereWithoutMoviesInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutMoviesInput>
  }

  export type GenresScalarWhereInput = {
    AND?: GenresScalarWhereInput | GenresScalarWhereInput[]
    OR?: GenresScalarWhereInput[]
    NOT?: GenresScalarWhereInput | GenresScalarWhereInput[]
    id?: IntFilter<"Genres"> | number
    genre?: StringFilter<"Genres"> | string
    createdAt?: DateTimeFilter<"Genres"> | Date | string
    updatedAt?: DateTimeFilter<"Genres"> | Date | string
    moviesId?: IntNullableFilter<"Genres"> | number | null
    publicmoviesId?: IntNullableFilter<"Genres"> | number | null
  }

  export type UsersUpsertWithoutMoviesInput = {
    update: XOR<UsersUpdateWithoutMoviesInput, UsersUncheckedUpdateWithoutMoviesInput>
    create: XOR<UsersCreateWithoutMoviesInput, UsersUncheckedCreateWithoutMoviesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMoviesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMoviesInput, UsersUncheckedUpdateWithoutMoviesInput>
  }

  export type UsersUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    moviesArray?: UsersUpdatemoviesArrayInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    moviesArray?: UsersUpdatemoviesArrayInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenresCreateWithoutPublicmoviesInput = {
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MoviesCreateNestedOneWithoutGenresInput
  }

  export type GenresUncheckedCreateWithoutPublicmoviesInput = {
    id?: number
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moviesId?: number | null
  }

  export type GenresCreateOrConnectWithoutPublicmoviesInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutPublicmoviesInput, GenresUncheckedCreateWithoutPublicmoviesInput>
  }

  export type GenresCreateManyPublicmoviesInputEnvelope = {
    data: GenresCreateManyPublicmoviesInput | GenresCreateManyPublicmoviesInput[]
    skipDuplicates?: boolean
  }

  export type GenresUpsertWithWhereUniqueWithoutPublicmoviesInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutPublicmoviesInput, GenresUncheckedUpdateWithoutPublicmoviesInput>
    create: XOR<GenresCreateWithoutPublicmoviesInput, GenresUncheckedCreateWithoutPublicmoviesInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutPublicmoviesInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutPublicmoviesInput, GenresUncheckedUpdateWithoutPublicmoviesInput>
  }

  export type GenresUpdateManyWithWhereWithoutPublicmoviesInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutPublicmoviesInput>
  }

  export type MoviesCreateWithoutGenresInput = {
    title: string
    score: number
    year: number
    country: string
    genresArray?: MoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
    users?: UsersCreateNestedOneWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutGenresInput = {
    id?: number
    title: string
    score: number
    year: number
    country: string
    genresArray?: MoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    usersId?: number | null
    imageUrl?: string | null
    imageId?: string | null
  }

  export type MoviesCreateOrConnectWithoutGenresInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutGenresInput, MoviesUncheckedCreateWithoutGenresInput>
  }

  export type PublicmoviesCreateWithoutGenresInput = {
    title: string
    score: number
    year: number
    country: string
    genresArray?: PublicmoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
  }

  export type PublicmoviesUncheckedCreateWithoutGenresInput = {
    id?: number
    title: string
    score: number
    year: number
    country: string
    genresArray?: PublicmoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
  }

  export type PublicmoviesCreateOrConnectWithoutGenresInput = {
    where: PublicmoviesWhereUniqueInput
    create: XOR<PublicmoviesCreateWithoutGenresInput, PublicmoviesUncheckedCreateWithoutGenresInput>
  }

  export type MoviesUpsertWithoutGenresInput = {
    update: XOR<MoviesUpdateWithoutGenresInput, MoviesUncheckedUpdateWithoutGenresInput>
    create: XOR<MoviesCreateWithoutGenresInput, MoviesUncheckedCreateWithoutGenresInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutGenresInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutGenresInput, MoviesUncheckedUpdateWithoutGenresInput>
  }

  export type MoviesUpdateWithoutGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateOneWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicmoviesUpsertWithoutGenresInput = {
    update: XOR<PublicmoviesUpdateWithoutGenresInput, PublicmoviesUncheckedUpdateWithoutGenresInput>
    create: XOR<PublicmoviesCreateWithoutGenresInput, PublicmoviesUncheckedCreateWithoutGenresInput>
    where?: PublicmoviesWhereInput
  }

  export type PublicmoviesUpdateToOneWithWhereWithoutGenresInput = {
    where?: PublicmoviesWhereInput
    data: XOR<PublicmoviesUpdateWithoutGenresInput, PublicmoviesUncheckedUpdateWithoutGenresInput>
  }

  export type PublicmoviesUpdateWithoutGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: PublicmoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicmoviesUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: PublicmoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MoviesCreateManyUsersInput = {
    id?: number
    title: string
    score: number
    year: number
    country: string
    genresArray?: MoviesCreategenresArrayInput | string[]
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    imageUrl?: string | null
    imageId?: string | null
  }

  export type MoviesUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenresUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenresUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    genresArray?: MoviesUpdategenresArrayInput | string[]
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenresCreateManyMoviesInput = {
    id?: number
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    publicmoviesId?: number | null
  }

  export type GenresUpdateWithoutMoviesInput = {
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Publicmovies?: PublicmoviesUpdateOneWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicmoviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GenresUncheckedUpdateManyWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publicmoviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GenresCreateManyPublicmoviesInput = {
    id?: number
    genre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moviesId?: number | null
  }

  export type GenresUpdateWithoutPublicmoviesInput = {
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUpdateOneWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateWithoutPublicmoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GenresUncheckedUpdateManyWithoutPublicmoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MoviesDefaultArgs instead
     */
    export type MoviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MoviesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicmoviesDefaultArgs instead
     */
    export type PublicmoviesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PublicmoviesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenresDefaultArgs instead
     */
    export type GenresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GenresDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}