
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Titulo
 * 
 */
export type Titulo = $Result.DefaultSelection<Prisma.$TituloPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Instituicao
 * 
 */
export type Instituicao = $Result.DefaultSelection<Prisma.$InstituicaoPayload>
/**
 * Model TipoCurso
 * 
 */
export type TipoCurso = $Result.DefaultSelection<Prisma.$TipoCursoPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model TipoDisciplina
 * 
 */
export type TipoDisciplina = $Result.DefaultSelection<Prisma.$TipoDisciplinaPayload>
/**
 * Model Disciplina
 * 
 */
export type Disciplina = $Result.DefaultSelection<Prisma.$DisciplinaPayload>
/**
 * Model Leciona
 * 
 */
export type Leciona = $Result.DefaultSelection<Prisma.$LecionaPayload>
/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Cursa
 * 
 */
export type Cursa = $Result.DefaultSelection<Prisma.$CursaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sexo: {
  M: 'M',
  F: 'F'
};

export type Sexo = (typeof Sexo)[keyof typeof Sexo]


export const EstadoCivil: {
  C: 'C',
  S: 'S',
  D: 'D'
};

export type EstadoCivil = (typeof EstadoCivil)[keyof typeof EstadoCivil]

}

export type Sexo = $Enums.Sexo

export const Sexo: typeof $Enums.Sexo

export type EstadoCivil = $Enums.EstadoCivil

export const EstadoCivil: typeof $Enums.EstadoCivil

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Titulos
 * const titulos = await prisma.titulo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Titulos
   * const titulos = await prisma.titulo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.titulo`: Exposes CRUD operations for the **Titulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Titulos
    * const titulos = await prisma.titulo.findMany()
    * ```
    */
  get titulo(): Prisma.TituloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instituicao`: Exposes CRUD operations for the **Instituicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instituicaos
    * const instituicaos = await prisma.instituicao.findMany()
    * ```
    */
  get instituicao(): Prisma.InstituicaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoCurso`: Exposes CRUD operations for the **TipoCurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoCursos
    * const tipoCursos = await prisma.tipoCurso.findMany()
    * ```
    */
  get tipoCurso(): Prisma.TipoCursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoDisciplina`: Exposes CRUD operations for the **TipoDisciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoDisciplinas
    * const tipoDisciplinas = await prisma.tipoDisciplina.findMany()
    * ```
    */
  get tipoDisciplina(): Prisma.TipoDisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **Disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.DisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leciona`: Exposes CRUD operations for the **Leciona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecionas
    * const lecionas = await prisma.leciona.findMany()
    * ```
    */
  get leciona(): Prisma.LecionaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cursa`: Exposes CRUD operations for the **Cursa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursas
    * const cursas = await prisma.cursa.findMany()
    * ```
    */
  get cursa(): Prisma.CursaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Titulo: 'Titulo',
    Professor: 'Professor',
    Instituicao: 'Instituicao',
    TipoCurso: 'TipoCurso',
    Curso: 'Curso',
    TipoDisciplina: 'TipoDisciplina',
    Disciplina: 'Disciplina',
    Leciona: 'Leciona',
    Aluno: 'Aluno',
    Cursa: 'Cursa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "titulo" | "professor" | "instituicao" | "tipoCurso" | "curso" | "tipoDisciplina" | "disciplina" | "leciona" | "aluno" | "cursa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Titulo: {
        payload: Prisma.$TituloPayload<ExtArgs>
        fields: Prisma.TituloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TituloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TituloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          findFirst: {
            args: Prisma.TituloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TituloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          findMany: {
            args: Prisma.TituloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>[]
          }
          create: {
            args: Prisma.TituloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          createMany: {
            args: Prisma.TituloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TituloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>[]
          }
          delete: {
            args: Prisma.TituloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          update: {
            args: Prisma.TituloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          deleteMany: {
            args: Prisma.TituloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TituloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TituloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>[]
          }
          upsert: {
            args: Prisma.TituloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          aggregate: {
            args: Prisma.TituloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTitulo>
          }
          groupBy: {
            args: Prisma.TituloGroupByArgs<ExtArgs>
            result: $Utils.Optional<TituloGroupByOutputType>[]
          }
          count: {
            args: Prisma.TituloCountArgs<ExtArgs>
            result: $Utils.Optional<TituloCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Instituicao: {
        payload: Prisma.$InstituicaoPayload<ExtArgs>
        fields: Prisma.InstituicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstituicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstituicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findFirst: {
            args: Prisma.InstituicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstituicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          findMany: {
            args: Prisma.InstituicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          create: {
            args: Prisma.InstituicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          createMany: {
            args: Prisma.InstituicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstituicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          delete: {
            args: Prisma.InstituicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          update: {
            args: Prisma.InstituicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          deleteMany: {
            args: Prisma.InstituicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstituicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstituicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>[]
          }
          upsert: {
            args: Prisma.InstituicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstituicaoPayload>
          }
          aggregate: {
            args: Prisma.InstituicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstituicao>
          }
          groupBy: {
            args: Prisma.InstituicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstituicaoCountArgs<ExtArgs>
            result: $Utils.Optional<InstituicaoCountAggregateOutputType> | number
          }
        }
      }
      TipoCurso: {
        payload: Prisma.$TipoCursoPayload<ExtArgs>
        fields: Prisma.TipoCursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoCursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoCursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>
          }
          findFirst: {
            args: Prisma.TipoCursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoCursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>
          }
          findMany: {
            args: Prisma.TipoCursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>[]
          }
          create: {
            args: Prisma.TipoCursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>
          }
          createMany: {
            args: Prisma.TipoCursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoCursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>[]
          }
          delete: {
            args: Prisma.TipoCursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>
          }
          update: {
            args: Prisma.TipoCursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>
          }
          deleteMany: {
            args: Prisma.TipoCursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoCursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoCursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>[]
          }
          upsert: {
            args: Prisma.TipoCursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCursoPayload>
          }
          aggregate: {
            args: Prisma.TipoCursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoCurso>
          }
          groupBy: {
            args: Prisma.TipoCursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoCursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoCursoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoCursoCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      TipoDisciplina: {
        payload: Prisma.$TipoDisciplinaPayload<ExtArgs>
        fields: Prisma.TipoDisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoDisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoDisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>
          }
          findFirst: {
            args: Prisma.TipoDisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoDisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>
          }
          findMany: {
            args: Prisma.TipoDisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>[]
          }
          create: {
            args: Prisma.TipoDisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>
          }
          createMany: {
            args: Prisma.TipoDisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoDisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>[]
          }
          delete: {
            args: Prisma.TipoDisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>
          }
          update: {
            args: Prisma.TipoDisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.TipoDisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoDisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoDisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.TipoDisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDisciplinaPayload>
          }
          aggregate: {
            args: Prisma.TipoDisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoDisciplina>
          }
          groupBy: {
            args: Prisma.TipoDisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoDisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoDisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<TipoDisciplinaCountAggregateOutputType> | number
          }
        }
      }
      Disciplina: {
        payload: Prisma.$DisciplinaPayload<ExtArgs>
        fields: Prisma.DisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findFirst: {
            args: Prisma.DisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findMany: {
            args: Prisma.DisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          create: {
            args: Prisma.DisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          createMany: {
            args: Prisma.DisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisciplinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          delete: {
            args: Prisma.DisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          update: {
            args: Prisma.DisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisciplinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          upsert: {
            args: Prisma.DisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.DisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      Leciona: {
        payload: Prisma.$LecionaPayload<ExtArgs>
        fields: Prisma.LecionaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecionaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecionaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>
          }
          findFirst: {
            args: Prisma.LecionaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecionaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>
          }
          findMany: {
            args: Prisma.LecionaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>[]
          }
          create: {
            args: Prisma.LecionaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>
          }
          createMany: {
            args: Prisma.LecionaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LecionaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>[]
          }
          delete: {
            args: Prisma.LecionaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>
          }
          update: {
            args: Prisma.LecionaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>
          }
          deleteMany: {
            args: Prisma.LecionaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecionaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LecionaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>[]
          }
          upsert: {
            args: Prisma.LecionaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecionaPayload>
          }
          aggregate: {
            args: Prisma.LecionaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeciona>
          }
          groupBy: {
            args: Prisma.LecionaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecionaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecionaCountArgs<ExtArgs>
            result: $Utils.Optional<LecionaCountAggregateOutputType> | number
          }
        }
      }
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlunoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlunoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Cursa: {
        payload: Prisma.$CursaPayload<ExtArgs>
        fields: Prisma.CursaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>
          }
          findFirst: {
            args: Prisma.CursaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>
          }
          findMany: {
            args: Prisma.CursaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>[]
          }
          create: {
            args: Prisma.CursaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>
          }
          createMany: {
            args: Prisma.CursaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>[]
          }
          delete: {
            args: Prisma.CursaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>
          }
          update: {
            args: Prisma.CursaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>
          }
          deleteMany: {
            args: Prisma.CursaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CursaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>[]
          }
          upsert: {
            args: Prisma.CursaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursaPayload>
          }
          aggregate: {
            args: Prisma.CursaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCursa>
          }
          groupBy: {
            args: Prisma.CursaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursaCountArgs<ExtArgs>
            result: $Utils.Optional<CursaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    titulo?: TituloOmit
    professor?: ProfessorOmit
    instituicao?: InstituicaoOmit
    tipoCurso?: TipoCursoOmit
    curso?: CursoOmit
    tipoDisciplina?: TipoDisciplinaOmit
    disciplina?: DisciplinaOmit
    leciona?: LecionaOmit
    aluno?: AlunoOmit
    cursa?: CursaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type TituloCountOutputType
   */

  export type TituloCountOutputType = {
    professores: number
  }

  export type TituloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professores?: boolean | TituloCountOutputTypeCountProfessoresArgs
  }

  // Custom InputTypes
  /**
   * TituloCountOutputType without action
   */
  export type TituloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TituloCountOutputType
     */
    select?: TituloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TituloCountOutputType without action
   */
  export type TituloCountOutputTypeCountProfessoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    leciona: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leciona?: boolean | ProfessorCountOutputTypeCountLecionaArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountLecionaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecionaWhereInput
  }


  /**
   * Count Type InstituicaoCountOutputType
   */

  export type InstituicaoCountOutputType = {
    cursos: number
  }

  export type InstituicaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | InstituicaoCountOutputTypeCountCursosArgs
  }

  // Custom InputTypes
  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstituicaoCountOutputType
     */
    select?: InstituicaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstituicaoCountOutputType without action
   */
  export type InstituicaoCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }


  /**
   * Count Type TipoCursoCountOutputType
   */

  export type TipoCursoCountOutputType = {
    cursos: number
  }

  export type TipoCursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | TipoCursoCountOutputTypeCountCursosArgs
  }

  // Custom InputTypes
  /**
   * TipoCursoCountOutputType without action
   */
  export type TipoCursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCursoCountOutputType
     */
    select?: TipoCursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoCursoCountOutputType without action
   */
  export type TipoCursoCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    disciplinas: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | CursoCountOutputTypeCountDisciplinasArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
  }


  /**
   * Count Type TipoDisciplinaCountOutputType
   */

  export type TipoDisciplinaCountOutputType = {
    disciplinas: number
  }

  export type TipoDisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | TipoDisciplinaCountOutputTypeCountDisciplinasArgs
  }

  // Custom InputTypes
  /**
   * TipoDisciplinaCountOutputType without action
   */
  export type TipoDisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplinaCountOutputType
     */
    select?: TipoDisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoDisciplinaCountOutputType without action
   */
  export type TipoDisciplinaCountOutputTypeCountDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    leciona: number
    cursa: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leciona?: boolean | DisciplinaCountOutputTypeCountLecionaArgs
    cursa?: boolean | DisciplinaCountOutputTypeCountCursaArgs
  }

  // Custom InputTypes
  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinaCountOutputType
     */
    select?: DisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountLecionaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecionaWhereInput
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountCursaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursaWhereInput
  }


  /**
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    Cursa: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cursa?: boolean | AlunoCountOutputTypeCountCursaArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountCursaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Titulo
   */

  export type AggregateTitulo = {
    _count: TituloCountAggregateOutputType | null
    _avg: TituloAvgAggregateOutputType | null
    _sum: TituloSumAggregateOutputType | null
    _min: TituloMinAggregateOutputType | null
    _max: TituloMaxAggregateOutputType | null
  }

  export type TituloAvgAggregateOutputType = {
    id_titulo: number | null
  }

  export type TituloSumAggregateOutputType = {
    id_titulo: number | null
  }

  export type TituloMinAggregateOutputType = {
    id_titulo: number | null
    tx_descricao: string | null
  }

  export type TituloMaxAggregateOutputType = {
    id_titulo: number | null
    tx_descricao: string | null
  }

  export type TituloCountAggregateOutputType = {
    id_titulo: number
    tx_descricao: number
    _all: number
  }


  export type TituloAvgAggregateInputType = {
    id_titulo?: true
  }

  export type TituloSumAggregateInputType = {
    id_titulo?: true
  }

  export type TituloMinAggregateInputType = {
    id_titulo?: true
    tx_descricao?: true
  }

  export type TituloMaxAggregateInputType = {
    id_titulo?: true
    tx_descricao?: true
  }

  export type TituloCountAggregateInputType = {
    id_titulo?: true
    tx_descricao?: true
    _all?: true
  }

  export type TituloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Titulo to aggregate.
     */
    where?: TituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titulos to fetch.
     */
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Titulos
    **/
    _count?: true | TituloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TituloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TituloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TituloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TituloMaxAggregateInputType
  }

  export type GetTituloAggregateType<T extends TituloAggregateArgs> = {
        [P in keyof T & keyof AggregateTitulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTitulo[P]>
      : GetScalarType<T[P], AggregateTitulo[P]>
  }




  export type TituloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TituloWhereInput
    orderBy?: TituloOrderByWithAggregationInput | TituloOrderByWithAggregationInput[]
    by: TituloScalarFieldEnum[] | TituloScalarFieldEnum
    having?: TituloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TituloCountAggregateInputType | true
    _avg?: TituloAvgAggregateInputType
    _sum?: TituloSumAggregateInputType
    _min?: TituloMinAggregateInputType
    _max?: TituloMaxAggregateInputType
  }

  export type TituloGroupByOutputType = {
    id_titulo: number
    tx_descricao: string
    _count: TituloCountAggregateOutputType | null
    _avg: TituloAvgAggregateOutputType | null
    _sum: TituloSumAggregateOutputType | null
    _min: TituloMinAggregateOutputType | null
    _max: TituloMaxAggregateOutputType | null
  }

  type GetTituloGroupByPayload<T extends TituloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TituloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TituloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TituloGroupByOutputType[P]>
            : GetScalarType<T[P], TituloGroupByOutputType[P]>
        }
      >
    >


  export type TituloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_titulo?: boolean
    tx_descricao?: boolean
    professores?: boolean | Titulo$professoresArgs<ExtArgs>
    _count?: boolean | TituloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["titulo"]>

  export type TituloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_titulo?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["titulo"]>

  export type TituloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_titulo?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["titulo"]>

  export type TituloSelectScalar = {
    id_titulo?: boolean
    tx_descricao?: boolean
  }

  export type TituloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_titulo" | "tx_descricao", ExtArgs["result"]["titulo"]>
  export type TituloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professores?: boolean | Titulo$professoresArgs<ExtArgs>
    _count?: boolean | TituloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TituloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TituloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TituloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Titulo"
    objects: {
      professores: Prisma.$ProfessorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_titulo: number
      tx_descricao: string
    }, ExtArgs["result"]["titulo"]>
    composites: {}
  }

  type TituloGetPayload<S extends boolean | null | undefined | TituloDefaultArgs> = $Result.GetResult<Prisma.$TituloPayload, S>

  type TituloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TituloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TituloCountAggregateInputType | true
    }

  export interface TituloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Titulo'], meta: { name: 'Titulo' } }
    /**
     * Find zero or one Titulo that matches the filter.
     * @param {TituloFindUniqueArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TituloFindUniqueArgs>(args: SelectSubset<T, TituloFindUniqueArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Titulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TituloFindUniqueOrThrowArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TituloFindUniqueOrThrowArgs>(args: SelectSubset<T, TituloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Titulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloFindFirstArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TituloFindFirstArgs>(args?: SelectSubset<T, TituloFindFirstArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Titulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloFindFirstOrThrowArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TituloFindFirstOrThrowArgs>(args?: SelectSubset<T, TituloFindFirstOrThrowArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Titulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Titulos
     * const titulos = await prisma.titulo.findMany()
     * 
     * // Get first 10 Titulos
     * const titulos = await prisma.titulo.findMany({ take: 10 })
     * 
     * // Only select the `id_titulo`
     * const tituloWithId_tituloOnly = await prisma.titulo.findMany({ select: { id_titulo: true } })
     * 
     */
    findMany<T extends TituloFindManyArgs>(args?: SelectSubset<T, TituloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Titulo.
     * @param {TituloCreateArgs} args - Arguments to create a Titulo.
     * @example
     * // Create one Titulo
     * const Titulo = await prisma.titulo.create({
     *   data: {
     *     // ... data to create a Titulo
     *   }
     * })
     * 
     */
    create<T extends TituloCreateArgs>(args: SelectSubset<T, TituloCreateArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Titulos.
     * @param {TituloCreateManyArgs} args - Arguments to create many Titulos.
     * @example
     * // Create many Titulos
     * const titulo = await prisma.titulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TituloCreateManyArgs>(args?: SelectSubset<T, TituloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Titulos and returns the data saved in the database.
     * @param {TituloCreateManyAndReturnArgs} args - Arguments to create many Titulos.
     * @example
     * // Create many Titulos
     * const titulo = await prisma.titulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Titulos and only return the `id_titulo`
     * const tituloWithId_tituloOnly = await prisma.titulo.createManyAndReturn({
     *   select: { id_titulo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TituloCreateManyAndReturnArgs>(args?: SelectSubset<T, TituloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Titulo.
     * @param {TituloDeleteArgs} args - Arguments to delete one Titulo.
     * @example
     * // Delete one Titulo
     * const Titulo = await prisma.titulo.delete({
     *   where: {
     *     // ... filter to delete one Titulo
     *   }
     * })
     * 
     */
    delete<T extends TituloDeleteArgs>(args: SelectSubset<T, TituloDeleteArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Titulo.
     * @param {TituloUpdateArgs} args - Arguments to update one Titulo.
     * @example
     * // Update one Titulo
     * const titulo = await prisma.titulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TituloUpdateArgs>(args: SelectSubset<T, TituloUpdateArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Titulos.
     * @param {TituloDeleteManyArgs} args - Arguments to filter Titulos to delete.
     * @example
     * // Delete a few Titulos
     * const { count } = await prisma.titulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TituloDeleteManyArgs>(args?: SelectSubset<T, TituloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Titulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Titulos
     * const titulo = await prisma.titulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TituloUpdateManyArgs>(args: SelectSubset<T, TituloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Titulos and returns the data updated in the database.
     * @param {TituloUpdateManyAndReturnArgs} args - Arguments to update many Titulos.
     * @example
     * // Update many Titulos
     * const titulo = await prisma.titulo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Titulos and only return the `id_titulo`
     * const tituloWithId_tituloOnly = await prisma.titulo.updateManyAndReturn({
     *   select: { id_titulo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TituloUpdateManyAndReturnArgs>(args: SelectSubset<T, TituloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Titulo.
     * @param {TituloUpsertArgs} args - Arguments to update or create a Titulo.
     * @example
     * // Update or create a Titulo
     * const titulo = await prisma.titulo.upsert({
     *   create: {
     *     // ... data to create a Titulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Titulo we want to update
     *   }
     * })
     */
    upsert<T extends TituloUpsertArgs>(args: SelectSubset<T, TituloUpsertArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Titulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloCountArgs} args - Arguments to filter Titulos to count.
     * @example
     * // Count the number of Titulos
     * const count = await prisma.titulo.count({
     *   where: {
     *     // ... the filter for the Titulos we want to count
     *   }
     * })
    **/
    count<T extends TituloCountArgs>(
      args?: Subset<T, TituloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TituloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Titulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TituloAggregateArgs>(args: Subset<T, TituloAggregateArgs>): Prisma.PrismaPromise<GetTituloAggregateType<T>>

    /**
     * Group by Titulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloGroupByArgs} args - Group by arguments.
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
      T extends TituloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TituloGroupByArgs['orderBy'] }
        : { orderBy?: TituloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TituloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTituloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Titulo model
   */
  readonly fields: TituloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Titulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TituloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professores<T extends Titulo$professoresArgs<ExtArgs> = {}>(args?: Subset<T, Titulo$professoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Titulo model
   */
  interface TituloFieldRefs {
    readonly id_titulo: FieldRef<"Titulo", 'Int'>
    readonly tx_descricao: FieldRef<"Titulo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Titulo findUnique
   */
  export type TituloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulo to fetch.
     */
    where: TituloWhereUniqueInput
  }

  /**
   * Titulo findUniqueOrThrow
   */
  export type TituloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulo to fetch.
     */
    where: TituloWhereUniqueInput
  }

  /**
   * Titulo findFirst
   */
  export type TituloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulo to fetch.
     */
    where?: TituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titulos to fetch.
     */
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Titulos.
     */
    cursor?: TituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Titulos.
     */
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * Titulo findFirstOrThrow
   */
  export type TituloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulo to fetch.
     */
    where?: TituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titulos to fetch.
     */
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Titulos.
     */
    cursor?: TituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Titulos.
     */
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * Titulo findMany
   */
  export type TituloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulos to fetch.
     */
    where?: TituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titulos to fetch.
     */
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Titulos.
     */
    cursor?: TituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titulos.
     */
    skip?: number
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * Titulo create
   */
  export type TituloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * The data needed to create a Titulo.
     */
    data: XOR<TituloCreateInput, TituloUncheckedCreateInput>
  }

  /**
   * Titulo createMany
   */
  export type TituloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Titulos.
     */
    data: TituloCreateManyInput | TituloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Titulo createManyAndReturn
   */
  export type TituloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * The data used to create many Titulos.
     */
    data: TituloCreateManyInput | TituloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Titulo update
   */
  export type TituloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * The data needed to update a Titulo.
     */
    data: XOR<TituloUpdateInput, TituloUncheckedUpdateInput>
    /**
     * Choose, which Titulo to update.
     */
    where: TituloWhereUniqueInput
  }

  /**
   * Titulo updateMany
   */
  export type TituloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Titulos.
     */
    data: XOR<TituloUpdateManyMutationInput, TituloUncheckedUpdateManyInput>
    /**
     * Filter which Titulos to update
     */
    where?: TituloWhereInput
    /**
     * Limit how many Titulos to update.
     */
    limit?: number
  }

  /**
   * Titulo updateManyAndReturn
   */
  export type TituloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * The data used to update Titulos.
     */
    data: XOR<TituloUpdateManyMutationInput, TituloUncheckedUpdateManyInput>
    /**
     * Filter which Titulos to update
     */
    where?: TituloWhereInput
    /**
     * Limit how many Titulos to update.
     */
    limit?: number
  }

  /**
   * Titulo upsert
   */
  export type TituloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * The filter to search for the Titulo to update in case it exists.
     */
    where: TituloWhereUniqueInput
    /**
     * In case the Titulo found by the `where` argument doesn't exist, create a new Titulo with this data.
     */
    create: XOR<TituloCreateInput, TituloUncheckedCreateInput>
    /**
     * In case the Titulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TituloUpdateInput, TituloUncheckedUpdateInput>
  }

  /**
   * Titulo delete
   */
  export type TituloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter which Titulo to delete.
     */
    where: TituloWhereUniqueInput
  }

  /**
   * Titulo deleteMany
   */
  export type TituloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Titulos to delete
     */
    where?: TituloWhereInput
    /**
     * Limit how many Titulos to delete.
     */
    limit?: number
  }

  /**
   * Titulo.professores
   */
  export type Titulo$professoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    cursor?: ProfessorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Titulo without action
   */
  export type TituloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Titulo
     */
    omit?: TituloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    id_professor: number | null
    id_titulo: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    id_professor: number | null
    id_titulo: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    id_professor: number | null
    id_titulo: number | null
    tx_nome: string | null
    tx_sexo: $Enums.Sexo | null
    tx_estado_civil: $Enums.EstadoCivil | null
    dt_nascimento: Date | null
    tx_telefone: string | null
  }

  export type ProfessorMaxAggregateOutputType = {
    id_professor: number | null
    id_titulo: number | null
    tx_nome: string | null
    tx_sexo: $Enums.Sexo | null
    tx_estado_civil: $Enums.EstadoCivil | null
    dt_nascimento: Date | null
    tx_telefone: string | null
  }

  export type ProfessorCountAggregateOutputType = {
    id_professor: number
    id_titulo: number
    tx_nome: number
    tx_sexo: number
    tx_estado_civil: number
    dt_nascimento: number
    tx_telefone: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    id_professor?: true
    id_titulo?: true
  }

  export type ProfessorSumAggregateInputType = {
    id_professor?: true
    id_titulo?: true
  }

  export type ProfessorMinAggregateInputType = {
    id_professor?: true
    id_titulo?: true
    tx_nome?: true
    tx_sexo?: true
    tx_estado_civil?: true
    dt_nascimento?: true
    tx_telefone?: true
  }

  export type ProfessorMaxAggregateInputType = {
    id_professor?: true
    id_titulo?: true
    tx_nome?: true
    tx_sexo?: true
    tx_estado_civil?: true
    dt_nascimento?: true
    tx_telefone?: true
  }

  export type ProfessorCountAggregateInputType = {
    id_professor?: true
    id_titulo?: true
    tx_nome?: true
    tx_sexo?: true
    tx_estado_civil?: true
    dt_nascimento?: true
    tx_telefone?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    id_professor: number
    id_titulo: number
    tx_nome: string
    tx_sexo: $Enums.Sexo
    tx_estado_civil: $Enums.EstadoCivil
    dt_nascimento: Date
    tx_telefone: string
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_titulo?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    tx_estado_civil?: boolean
    dt_nascimento?: boolean
    tx_telefone?: boolean
    titulo?: boolean | TituloDefaultArgs<ExtArgs>
    leciona?: boolean | Professor$lecionaArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_titulo?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    tx_estado_civil?: boolean
    dt_nascimento?: boolean
    tx_telefone?: boolean
    titulo?: boolean | TituloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_professor?: boolean
    id_titulo?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    tx_estado_civil?: boolean
    dt_nascimento?: boolean
    tx_telefone?: boolean
    titulo?: boolean | TituloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>

  export type ProfessorSelectScalar = {
    id_professor?: boolean
    id_titulo?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    tx_estado_civil?: boolean
    dt_nascimento?: boolean
    tx_telefone?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_professor" | "id_titulo" | "tx_nome" | "tx_sexo" | "tx_estado_civil" | "dt_nascimento" | "tx_telefone", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    titulo?: boolean | TituloDefaultArgs<ExtArgs>
    leciona?: boolean | Professor$lecionaArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    titulo?: boolean | TituloDefaultArgs<ExtArgs>
  }
  export type ProfessorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    titulo?: boolean | TituloDefaultArgs<ExtArgs>
  }

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      titulo: Prisma.$TituloPayload<ExtArgs>
      leciona: Prisma.$LecionaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_professor: number
      id_titulo: number
      tx_nome: string
      tx_sexo: $Enums.Sexo
      tx_estado_civil: $Enums.EstadoCivil
      dt_nascimento: Date
      tx_telefone: string
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.findMany({ select: { id_professor: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professors and returns the data saved in the database.
     * @param {ProfessorCreateManyAndReturnArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professors and only return the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.createManyAndReturn({
     *   select: { id_professor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors and returns the data updated in the database.
     * @param {ProfessorUpdateManyAndReturnArgs} args - Arguments to update many Professors.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professors and only return the `id_professor`
     * const professorWithId_professorOnly = await prisma.professor.updateManyAndReturn({
     *   select: { id_professor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfessorUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    titulo<T extends TituloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TituloDefaultArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leciona<T extends Professor$lecionaArgs<ExtArgs> = {}>(args?: Subset<T, Professor$lecionaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly id_professor: FieldRef<"Professor", 'Int'>
    readonly id_titulo: FieldRef<"Professor", 'Int'>
    readonly tx_nome: FieldRef<"Professor", 'String'>
    readonly tx_sexo: FieldRef<"Professor", 'Sexo'>
    readonly tx_estado_civil: FieldRef<"Professor", 'EstadoCivil'>
    readonly dt_nascimento: FieldRef<"Professor", 'DateTime'>
    readonly tx_telefone: FieldRef<"Professor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor createManyAndReturn
   */
  export type ProfessorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor updateManyAndReturn
   */
  export type ProfessorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.leciona
   */
  export type Professor$lecionaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    where?: LecionaWhereInput
    orderBy?: LecionaOrderByWithRelationInput | LecionaOrderByWithRelationInput[]
    cursor?: LecionaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Instituicao
   */

  export type AggregateInstituicao = {
    _count: InstituicaoCountAggregateOutputType | null
    _avg: InstituicaoAvgAggregateOutputType | null
    _sum: InstituicaoSumAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  export type InstituicaoAvgAggregateOutputType = {
    id_instituicao: number | null
  }

  export type InstituicaoSumAggregateOutputType = {
    id_instituicao: number | null
  }

  export type InstituicaoMinAggregateOutputType = {
    id_instituicao: number | null
    tx_sigla: string | null
    tx_descricao: string | null
  }

  export type InstituicaoMaxAggregateOutputType = {
    id_instituicao: number | null
    tx_sigla: string | null
    tx_descricao: string | null
  }

  export type InstituicaoCountAggregateOutputType = {
    id_instituicao: number
    tx_sigla: number
    tx_descricao: number
    _all: number
  }


  export type InstituicaoAvgAggregateInputType = {
    id_instituicao?: true
  }

  export type InstituicaoSumAggregateInputType = {
    id_instituicao?: true
  }

  export type InstituicaoMinAggregateInputType = {
    id_instituicao?: true
    tx_sigla?: true
    tx_descricao?: true
  }

  export type InstituicaoMaxAggregateInputType = {
    id_instituicao?: true
    tx_sigla?: true
    tx_descricao?: true
  }

  export type InstituicaoCountAggregateInputType = {
    id_instituicao?: true
    tx_sigla?: true
    tx_descricao?: true
    _all?: true
  }

  export type InstituicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicao to aggregate.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instituicaos
    **/
    _count?: true | InstituicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstituicaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstituicaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstituicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstituicaoMaxAggregateInputType
  }

  export type GetInstituicaoAggregateType<T extends InstituicaoAggregateArgs> = {
        [P in keyof T & keyof AggregateInstituicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstituicao[P]>
      : GetScalarType<T[P], AggregateInstituicao[P]>
  }




  export type InstituicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstituicaoWhereInput
    orderBy?: InstituicaoOrderByWithAggregationInput | InstituicaoOrderByWithAggregationInput[]
    by: InstituicaoScalarFieldEnum[] | InstituicaoScalarFieldEnum
    having?: InstituicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstituicaoCountAggregateInputType | true
    _avg?: InstituicaoAvgAggregateInputType
    _sum?: InstituicaoSumAggregateInputType
    _min?: InstituicaoMinAggregateInputType
    _max?: InstituicaoMaxAggregateInputType
  }

  export type InstituicaoGroupByOutputType = {
    id_instituicao: number
    tx_sigla: string
    tx_descricao: string
    _count: InstituicaoCountAggregateOutputType | null
    _avg: InstituicaoAvgAggregateOutputType | null
    _sum: InstituicaoSumAggregateOutputType | null
    _min: InstituicaoMinAggregateOutputType | null
    _max: InstituicaoMaxAggregateOutputType | null
  }

  type GetInstituicaoGroupByPayload<T extends InstituicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstituicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstituicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
            : GetScalarType<T[P], InstituicaoGroupByOutputType[P]>
        }
      >
    >


  export type InstituicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_instituicao?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    cursos?: boolean | Instituicao$cursosArgs<ExtArgs>
    _count?: boolean | InstituicaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_instituicao?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_instituicao?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["instituicao"]>

  export type InstituicaoSelectScalar = {
    id_instituicao?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
  }

  export type InstituicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_instituicao" | "tx_sigla" | "tx_descricao", ExtArgs["result"]["instituicao"]>
  export type InstituicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | Instituicao$cursosArgs<ExtArgs>
    _count?: boolean | InstituicaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstituicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstituicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstituicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instituicao"
    objects: {
      cursos: Prisma.$CursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_instituicao: number
      tx_sigla: string
      tx_descricao: string
    }, ExtArgs["result"]["instituicao"]>
    composites: {}
  }

  type InstituicaoGetPayload<S extends boolean | null | undefined | InstituicaoDefaultArgs> = $Result.GetResult<Prisma.$InstituicaoPayload, S>

  type InstituicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstituicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstituicaoCountAggregateInputType | true
    }

  export interface InstituicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instituicao'], meta: { name: 'Instituicao' } }
    /**
     * Find zero or one Instituicao that matches the filter.
     * @param {InstituicaoFindUniqueArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstituicaoFindUniqueArgs>(args: SelectSubset<T, InstituicaoFindUniqueArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instituicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstituicaoFindUniqueOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstituicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, InstituicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstituicaoFindFirstArgs>(args?: SelectSubset<T, InstituicaoFindFirstArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instituicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindFirstOrThrowArgs} args - Arguments to find a Instituicao
     * @example
     * // Get one Instituicao
     * const instituicao = await prisma.instituicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstituicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, InstituicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instituicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instituicaos
     * const instituicaos = await prisma.instituicao.findMany()
     * 
     * // Get first 10 Instituicaos
     * const instituicaos = await prisma.instituicao.findMany({ take: 10 })
     * 
     * // Only select the `id_instituicao`
     * const instituicaoWithId_instituicaoOnly = await prisma.instituicao.findMany({ select: { id_instituicao: true } })
     * 
     */
    findMany<T extends InstituicaoFindManyArgs>(args?: SelectSubset<T, InstituicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instituicao.
     * @param {InstituicaoCreateArgs} args - Arguments to create a Instituicao.
     * @example
     * // Create one Instituicao
     * const Instituicao = await prisma.instituicao.create({
     *   data: {
     *     // ... data to create a Instituicao
     *   }
     * })
     * 
     */
    create<T extends InstituicaoCreateArgs>(args: SelectSubset<T, InstituicaoCreateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instituicaos.
     * @param {InstituicaoCreateManyArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstituicaoCreateManyArgs>(args?: SelectSubset<T, InstituicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instituicaos and returns the data saved in the database.
     * @param {InstituicaoCreateManyAndReturnArgs} args - Arguments to create many Instituicaos.
     * @example
     * // Create many Instituicaos
     * const instituicao = await prisma.instituicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instituicaos and only return the `id_instituicao`
     * const instituicaoWithId_instituicaoOnly = await prisma.instituicao.createManyAndReturn({
     *   select: { id_instituicao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstituicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, InstituicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instituicao.
     * @param {InstituicaoDeleteArgs} args - Arguments to delete one Instituicao.
     * @example
     * // Delete one Instituicao
     * const Instituicao = await prisma.instituicao.delete({
     *   where: {
     *     // ... filter to delete one Instituicao
     *   }
     * })
     * 
     */
    delete<T extends InstituicaoDeleteArgs>(args: SelectSubset<T, InstituicaoDeleteArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instituicao.
     * @param {InstituicaoUpdateArgs} args - Arguments to update one Instituicao.
     * @example
     * // Update one Instituicao
     * const instituicao = await prisma.instituicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstituicaoUpdateArgs>(args: SelectSubset<T, InstituicaoUpdateArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instituicaos.
     * @param {InstituicaoDeleteManyArgs} args - Arguments to filter Instituicaos to delete.
     * @example
     * // Delete a few Instituicaos
     * const { count } = await prisma.instituicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstituicaoDeleteManyArgs>(args?: SelectSubset<T, InstituicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstituicaoUpdateManyArgs>(args: SelectSubset<T, InstituicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instituicaos and returns the data updated in the database.
     * @param {InstituicaoUpdateManyAndReturnArgs} args - Arguments to update many Instituicaos.
     * @example
     * // Update many Instituicaos
     * const instituicao = await prisma.instituicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instituicaos and only return the `id_instituicao`
     * const instituicaoWithId_instituicaoOnly = await prisma.instituicao.updateManyAndReturn({
     *   select: { id_instituicao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstituicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, InstituicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instituicao.
     * @param {InstituicaoUpsertArgs} args - Arguments to update or create a Instituicao.
     * @example
     * // Update or create a Instituicao
     * const instituicao = await prisma.instituicao.upsert({
     *   create: {
     *     // ... data to create a Instituicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instituicao we want to update
     *   }
     * })
     */
    upsert<T extends InstituicaoUpsertArgs>(args: SelectSubset<T, InstituicaoUpsertArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instituicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoCountArgs} args - Arguments to filter Instituicaos to count.
     * @example
     * // Count the number of Instituicaos
     * const count = await prisma.instituicao.count({
     *   where: {
     *     // ... the filter for the Instituicaos we want to count
     *   }
     * })
    **/
    count<T extends InstituicaoCountArgs>(
      args?: Subset<T, InstituicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstituicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstituicaoAggregateArgs>(args: Subset<T, InstituicaoAggregateArgs>): Prisma.PrismaPromise<GetInstituicaoAggregateType<T>>

    /**
     * Group by Instituicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstituicaoGroupByArgs} args - Group by arguments.
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
      T extends InstituicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstituicaoGroupByArgs['orderBy'] }
        : { orderBy?: InstituicaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstituicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstituicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instituicao model
   */
  readonly fields: InstituicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instituicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstituicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends Instituicao$cursosArgs<ExtArgs> = {}>(args?: Subset<T, Instituicao$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instituicao model
   */
  interface InstituicaoFieldRefs {
    readonly id_instituicao: FieldRef<"Instituicao", 'Int'>
    readonly tx_sigla: FieldRef<"Instituicao", 'String'>
    readonly tx_descricao: FieldRef<"Instituicao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instituicao findUnique
   */
  export type InstituicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findUniqueOrThrow
   */
  export type InstituicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao findFirst
   */
  export type InstituicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findFirstOrThrow
   */
  export type InstituicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicao to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instituicaos.
     */
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao findMany
   */
  export type InstituicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter, which Instituicaos to fetch.
     */
    where?: InstituicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instituicaos to fetch.
     */
    orderBy?: InstituicaoOrderByWithRelationInput | InstituicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instituicaos.
     */
    cursor?: InstituicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instituicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instituicaos.
     */
    skip?: number
    distinct?: InstituicaoScalarFieldEnum | InstituicaoScalarFieldEnum[]
  }

  /**
   * Instituicao create
   */
  export type InstituicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Instituicao.
     */
    data: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
  }

  /**
   * Instituicao createMany
   */
  export type InstituicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instituicao createManyAndReturn
   */
  export type InstituicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data used to create many Instituicaos.
     */
    data: InstituicaoCreateManyInput | InstituicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instituicao update
   */
  export type InstituicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Instituicao.
     */
    data: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
    /**
     * Choose, which Instituicao to update.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao updateMany
   */
  export type InstituicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
  }

  /**
   * Instituicao updateManyAndReturn
   */
  export type InstituicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * The data used to update Instituicaos.
     */
    data: XOR<InstituicaoUpdateManyMutationInput, InstituicaoUncheckedUpdateManyInput>
    /**
     * Filter which Instituicaos to update
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to update.
     */
    limit?: number
  }

  /**
   * Instituicao upsert
   */
  export type InstituicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Instituicao to update in case it exists.
     */
    where: InstituicaoWhereUniqueInput
    /**
     * In case the Instituicao found by the `where` argument doesn't exist, create a new Instituicao with this data.
     */
    create: XOR<InstituicaoCreateInput, InstituicaoUncheckedCreateInput>
    /**
     * In case the Instituicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstituicaoUpdateInput, InstituicaoUncheckedUpdateInput>
  }

  /**
   * Instituicao delete
   */
  export type InstituicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
    /**
     * Filter which Instituicao to delete.
     */
    where: InstituicaoWhereUniqueInput
  }

  /**
   * Instituicao deleteMany
   */
  export type InstituicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instituicaos to delete
     */
    where?: InstituicaoWhereInput
    /**
     * Limit how many Instituicaos to delete.
     */
    limit?: number
  }

  /**
   * Instituicao.cursos
   */
  export type Instituicao$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Instituicao without action
   */
  export type InstituicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instituicao
     */
    select?: InstituicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instituicao
     */
    omit?: InstituicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstituicaoInclude<ExtArgs> | null
  }


  /**
   * Model TipoCurso
   */

  export type AggregateTipoCurso = {
    _count: TipoCursoCountAggregateOutputType | null
    _avg: TipoCursoAvgAggregateOutputType | null
    _sum: TipoCursoSumAggregateOutputType | null
    _min: TipoCursoMinAggregateOutputType | null
    _max: TipoCursoMaxAggregateOutputType | null
  }

  export type TipoCursoAvgAggregateOutputType = {
    id_tipo_curso: number | null
  }

  export type TipoCursoSumAggregateOutputType = {
    id_tipo_curso: number | null
  }

  export type TipoCursoMinAggregateOutputType = {
    id_tipo_curso: number | null
    tx_descricao: string | null
  }

  export type TipoCursoMaxAggregateOutputType = {
    id_tipo_curso: number | null
    tx_descricao: string | null
  }

  export type TipoCursoCountAggregateOutputType = {
    id_tipo_curso: number
    tx_descricao: number
    _all: number
  }


  export type TipoCursoAvgAggregateInputType = {
    id_tipo_curso?: true
  }

  export type TipoCursoSumAggregateInputType = {
    id_tipo_curso?: true
  }

  export type TipoCursoMinAggregateInputType = {
    id_tipo_curso?: true
    tx_descricao?: true
  }

  export type TipoCursoMaxAggregateInputType = {
    id_tipo_curso?: true
    tx_descricao?: true
  }

  export type TipoCursoCountAggregateInputType = {
    id_tipo_curso?: true
    tx_descricao?: true
    _all?: true
  }

  export type TipoCursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCurso to aggregate.
     */
    where?: TipoCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCursos to fetch.
     */
    orderBy?: TipoCursoOrderByWithRelationInput | TipoCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoCursos
    **/
    _count?: true | TipoCursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoCursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoCursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoCursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoCursoMaxAggregateInputType
  }

  export type GetTipoCursoAggregateType<T extends TipoCursoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoCurso[P]>
      : GetScalarType<T[P], AggregateTipoCurso[P]>
  }




  export type TipoCursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoCursoWhereInput
    orderBy?: TipoCursoOrderByWithAggregationInput | TipoCursoOrderByWithAggregationInput[]
    by: TipoCursoScalarFieldEnum[] | TipoCursoScalarFieldEnum
    having?: TipoCursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoCursoCountAggregateInputType | true
    _avg?: TipoCursoAvgAggregateInputType
    _sum?: TipoCursoSumAggregateInputType
    _min?: TipoCursoMinAggregateInputType
    _max?: TipoCursoMaxAggregateInputType
  }

  export type TipoCursoGroupByOutputType = {
    id_tipo_curso: number
    tx_descricao: string
    _count: TipoCursoCountAggregateOutputType | null
    _avg: TipoCursoAvgAggregateOutputType | null
    _sum: TipoCursoSumAggregateOutputType | null
    _min: TipoCursoMinAggregateOutputType | null
    _max: TipoCursoMaxAggregateOutputType | null
  }

  type GetTipoCursoGroupByPayload<T extends TipoCursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoCursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoCursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoCursoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoCursoGroupByOutputType[P]>
        }
      >
    >


  export type TipoCursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_curso?: boolean
    tx_descricao?: boolean
    cursos?: boolean | TipoCurso$cursosArgs<ExtArgs>
    _count?: boolean | TipoCursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoCurso"]>

  export type TipoCursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_curso?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["tipoCurso"]>

  export type TipoCursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_curso?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["tipoCurso"]>

  export type TipoCursoSelectScalar = {
    id_tipo_curso?: boolean
    tx_descricao?: boolean
  }

  export type TipoCursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_curso" | "tx_descricao", ExtArgs["result"]["tipoCurso"]>
  export type TipoCursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | TipoCurso$cursosArgs<ExtArgs>
    _count?: boolean | TipoCursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoCursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoCursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoCursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoCurso"
    objects: {
      cursos: Prisma.$CursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_curso: number
      tx_descricao: string
    }, ExtArgs["result"]["tipoCurso"]>
    composites: {}
  }

  type TipoCursoGetPayload<S extends boolean | null | undefined | TipoCursoDefaultArgs> = $Result.GetResult<Prisma.$TipoCursoPayload, S>

  type TipoCursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoCursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoCursoCountAggregateInputType | true
    }

  export interface TipoCursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoCurso'], meta: { name: 'TipoCurso' } }
    /**
     * Find zero or one TipoCurso that matches the filter.
     * @param {TipoCursoFindUniqueArgs} args - Arguments to find a TipoCurso
     * @example
     * // Get one TipoCurso
     * const tipoCurso = await prisma.tipoCurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoCursoFindUniqueArgs>(args: SelectSubset<T, TipoCursoFindUniqueArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoCurso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoCursoFindUniqueOrThrowArgs} args - Arguments to find a TipoCurso
     * @example
     * // Get one TipoCurso
     * const tipoCurso = await prisma.tipoCurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoCursoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoCursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoCurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCursoFindFirstArgs} args - Arguments to find a TipoCurso
     * @example
     * // Get one TipoCurso
     * const tipoCurso = await prisma.tipoCurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoCursoFindFirstArgs>(args?: SelectSubset<T, TipoCursoFindFirstArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoCurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCursoFindFirstOrThrowArgs} args - Arguments to find a TipoCurso
     * @example
     * // Get one TipoCurso
     * const tipoCurso = await prisma.tipoCurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoCursoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoCursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoCursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoCursos
     * const tipoCursos = await prisma.tipoCurso.findMany()
     * 
     * // Get first 10 TipoCursos
     * const tipoCursos = await prisma.tipoCurso.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_curso`
     * const tipoCursoWithId_tipo_cursoOnly = await prisma.tipoCurso.findMany({ select: { id_tipo_curso: true } })
     * 
     */
    findMany<T extends TipoCursoFindManyArgs>(args?: SelectSubset<T, TipoCursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoCurso.
     * @param {TipoCursoCreateArgs} args - Arguments to create a TipoCurso.
     * @example
     * // Create one TipoCurso
     * const TipoCurso = await prisma.tipoCurso.create({
     *   data: {
     *     // ... data to create a TipoCurso
     *   }
     * })
     * 
     */
    create<T extends TipoCursoCreateArgs>(args: SelectSubset<T, TipoCursoCreateArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoCursos.
     * @param {TipoCursoCreateManyArgs} args - Arguments to create many TipoCursos.
     * @example
     * // Create many TipoCursos
     * const tipoCurso = await prisma.tipoCurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoCursoCreateManyArgs>(args?: SelectSubset<T, TipoCursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoCursos and returns the data saved in the database.
     * @param {TipoCursoCreateManyAndReturnArgs} args - Arguments to create many TipoCursos.
     * @example
     * // Create many TipoCursos
     * const tipoCurso = await prisma.tipoCurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoCursos and only return the `id_tipo_curso`
     * const tipoCursoWithId_tipo_cursoOnly = await prisma.tipoCurso.createManyAndReturn({
     *   select: { id_tipo_curso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoCursoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoCursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoCurso.
     * @param {TipoCursoDeleteArgs} args - Arguments to delete one TipoCurso.
     * @example
     * // Delete one TipoCurso
     * const TipoCurso = await prisma.tipoCurso.delete({
     *   where: {
     *     // ... filter to delete one TipoCurso
     *   }
     * })
     * 
     */
    delete<T extends TipoCursoDeleteArgs>(args: SelectSubset<T, TipoCursoDeleteArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoCurso.
     * @param {TipoCursoUpdateArgs} args - Arguments to update one TipoCurso.
     * @example
     * // Update one TipoCurso
     * const tipoCurso = await prisma.tipoCurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoCursoUpdateArgs>(args: SelectSubset<T, TipoCursoUpdateArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoCursos.
     * @param {TipoCursoDeleteManyArgs} args - Arguments to filter TipoCursos to delete.
     * @example
     * // Delete a few TipoCursos
     * const { count } = await prisma.tipoCurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoCursoDeleteManyArgs>(args?: SelectSubset<T, TipoCursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoCursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoCursos
     * const tipoCurso = await prisma.tipoCurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoCursoUpdateManyArgs>(args: SelectSubset<T, TipoCursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoCursos and returns the data updated in the database.
     * @param {TipoCursoUpdateManyAndReturnArgs} args - Arguments to update many TipoCursos.
     * @example
     * // Update many TipoCursos
     * const tipoCurso = await prisma.tipoCurso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoCursos and only return the `id_tipo_curso`
     * const tipoCursoWithId_tipo_cursoOnly = await prisma.tipoCurso.updateManyAndReturn({
     *   select: { id_tipo_curso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoCursoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoCursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoCurso.
     * @param {TipoCursoUpsertArgs} args - Arguments to update or create a TipoCurso.
     * @example
     * // Update or create a TipoCurso
     * const tipoCurso = await prisma.tipoCurso.upsert({
     *   create: {
     *     // ... data to create a TipoCurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoCurso we want to update
     *   }
     * })
     */
    upsert<T extends TipoCursoUpsertArgs>(args: SelectSubset<T, TipoCursoUpsertArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoCursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCursoCountArgs} args - Arguments to filter TipoCursos to count.
     * @example
     * // Count the number of TipoCursos
     * const count = await prisma.tipoCurso.count({
     *   where: {
     *     // ... the filter for the TipoCursos we want to count
     *   }
     * })
    **/
    count<T extends TipoCursoCountArgs>(
      args?: Subset<T, TipoCursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoCursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoCurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoCursoAggregateArgs>(args: Subset<T, TipoCursoAggregateArgs>): Prisma.PrismaPromise<GetTipoCursoAggregateType<T>>

    /**
     * Group by TipoCurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCursoGroupByArgs} args - Group by arguments.
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
      T extends TipoCursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoCursoGroupByArgs['orderBy'] }
        : { orderBy?: TipoCursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoCursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoCurso model
   */
  readonly fields: TipoCursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoCurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoCursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends TipoCurso$cursosArgs<ExtArgs> = {}>(args?: Subset<T, TipoCurso$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoCurso model
   */
  interface TipoCursoFieldRefs {
    readonly id_tipo_curso: FieldRef<"TipoCurso", 'Int'>
    readonly tx_descricao: FieldRef<"TipoCurso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoCurso findUnique
   */
  export type TipoCursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCurso to fetch.
     */
    where: TipoCursoWhereUniqueInput
  }

  /**
   * TipoCurso findUniqueOrThrow
   */
  export type TipoCursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCurso to fetch.
     */
    where: TipoCursoWhereUniqueInput
  }

  /**
   * TipoCurso findFirst
   */
  export type TipoCursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCurso to fetch.
     */
    where?: TipoCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCursos to fetch.
     */
    orderBy?: TipoCursoOrderByWithRelationInput | TipoCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoCursos.
     */
    cursor?: TipoCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoCursos.
     */
    distinct?: TipoCursoScalarFieldEnum | TipoCursoScalarFieldEnum[]
  }

  /**
   * TipoCurso findFirstOrThrow
   */
  export type TipoCursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCurso to fetch.
     */
    where?: TipoCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCursos to fetch.
     */
    orderBy?: TipoCursoOrderByWithRelationInput | TipoCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoCursos.
     */
    cursor?: TipoCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoCursos.
     */
    distinct?: TipoCursoScalarFieldEnum | TipoCursoScalarFieldEnum[]
  }

  /**
   * TipoCurso findMany
   */
  export type TipoCursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCursos to fetch.
     */
    where?: TipoCursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCursos to fetch.
     */
    orderBy?: TipoCursoOrderByWithRelationInput | TipoCursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoCursos.
     */
    cursor?: TipoCursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCursos.
     */
    skip?: number
    distinct?: TipoCursoScalarFieldEnum | TipoCursoScalarFieldEnum[]
  }

  /**
   * TipoCurso create
   */
  export type TipoCursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoCurso.
     */
    data: XOR<TipoCursoCreateInput, TipoCursoUncheckedCreateInput>
  }

  /**
   * TipoCurso createMany
   */
  export type TipoCursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoCursos.
     */
    data: TipoCursoCreateManyInput | TipoCursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoCurso createManyAndReturn
   */
  export type TipoCursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoCursos.
     */
    data: TipoCursoCreateManyInput | TipoCursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoCurso update
   */
  export type TipoCursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoCurso.
     */
    data: XOR<TipoCursoUpdateInput, TipoCursoUncheckedUpdateInput>
    /**
     * Choose, which TipoCurso to update.
     */
    where: TipoCursoWhereUniqueInput
  }

  /**
   * TipoCurso updateMany
   */
  export type TipoCursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoCursos.
     */
    data: XOR<TipoCursoUpdateManyMutationInput, TipoCursoUncheckedUpdateManyInput>
    /**
     * Filter which TipoCursos to update
     */
    where?: TipoCursoWhereInput
    /**
     * Limit how many TipoCursos to update.
     */
    limit?: number
  }

  /**
   * TipoCurso updateManyAndReturn
   */
  export type TipoCursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * The data used to update TipoCursos.
     */
    data: XOR<TipoCursoUpdateManyMutationInput, TipoCursoUncheckedUpdateManyInput>
    /**
     * Filter which TipoCursos to update
     */
    where?: TipoCursoWhereInput
    /**
     * Limit how many TipoCursos to update.
     */
    limit?: number
  }

  /**
   * TipoCurso upsert
   */
  export type TipoCursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoCurso to update in case it exists.
     */
    where: TipoCursoWhereUniqueInput
    /**
     * In case the TipoCurso found by the `where` argument doesn't exist, create a new TipoCurso with this data.
     */
    create: XOR<TipoCursoCreateInput, TipoCursoUncheckedCreateInput>
    /**
     * In case the TipoCurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoCursoUpdateInput, TipoCursoUncheckedUpdateInput>
  }

  /**
   * TipoCurso delete
   */
  export type TipoCursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
    /**
     * Filter which TipoCurso to delete.
     */
    where: TipoCursoWhereUniqueInput
  }

  /**
   * TipoCurso deleteMany
   */
  export type TipoCursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCursos to delete
     */
    where?: TipoCursoWhereInput
    /**
     * Limit how many TipoCursos to delete.
     */
    limit?: number
  }

  /**
   * TipoCurso.cursos
   */
  export type TipoCurso$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * TipoCurso without action
   */
  export type TipoCursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCurso
     */
    select?: TipoCursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCurso
     */
    omit?: TipoCursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCursoInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id_curso: number | null
    id_instituicao: number | null
    id_tipo_curso: number | null
  }

  export type CursoSumAggregateOutputType = {
    id_curso: number | null
    id_instituicao: number | null
    id_tipo_curso: number | null
  }

  export type CursoMinAggregateOutputType = {
    id_curso: number | null
    id_instituicao: number | null
    id_tipo_curso: number | null
    tx_descricao: string | null
  }

  export type CursoMaxAggregateOutputType = {
    id_curso: number | null
    id_instituicao: number | null
    id_tipo_curso: number | null
    tx_descricao: string | null
  }

  export type CursoCountAggregateOutputType = {
    id_curso: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
  }

  export type CursoSumAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
  }

  export type CursoMinAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
    tx_descricao?: true
  }

  export type CursoMaxAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
    tx_descricao?: true
  }

  export type CursoCountAggregateInputType = {
    id_curso?: true
    id_instituicao?: true
    id_tipo_curso?: true
    tx_descricao?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id_curso: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    id_instituicao?: boolean
    id_tipo_curso?: boolean
    tx_descricao?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    tipoCurso?: boolean | TipoCursoDefaultArgs<ExtArgs>
    disciplinas?: boolean | Curso$disciplinasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    id_instituicao?: boolean
    id_tipo_curso?: boolean
    tx_descricao?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    tipoCurso?: boolean | TipoCursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_curso?: boolean
    id_instituicao?: boolean
    id_tipo_curso?: boolean
    tx_descricao?: boolean
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    tipoCurso?: boolean | TipoCursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    id_curso?: boolean
    id_instituicao?: boolean
    id_tipo_curso?: boolean
    tx_descricao?: boolean
  }

  export type CursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_curso" | "id_instituicao" | "id_tipo_curso" | "tx_descricao", ExtArgs["result"]["curso"]>
  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    tipoCurso?: boolean | TipoCursoDefaultArgs<ExtArgs>
    disciplinas?: boolean | Curso$disciplinasArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    tipoCurso?: boolean | TipoCursoDefaultArgs<ExtArgs>
  }
  export type CursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instituicao?: boolean | InstituicaoDefaultArgs<ExtArgs>
    tipoCurso?: boolean | TipoCursoDefaultArgs<ExtArgs>
  }

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      instituicao: Prisma.$InstituicaoPayload<ExtArgs>
      tipoCurso: Prisma.$TipoCursoPayload<ExtArgs>
      disciplinas: Prisma.$DisciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_curso: number
      id_instituicao: number
      id_tipo_curso: number
      tx_descricao: string
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id_curso`
     * const cursoWithId_cursoOnly = await prisma.curso.findMany({ select: { id_curso: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id_curso`
     * const cursoWithId_cursoOnly = await prisma.curso.createManyAndReturn({
     *   select: { id_curso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos and returns the data updated in the database.
     * @param {CursoUpdateManyAndReturnArgs} args - Arguments to update many Cursos.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursos and only return the `id_curso`
     * const cursoWithId_cursoOnly = await prisma.curso.updateManyAndReturn({
     *   select: { id_curso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CursoUpdateManyAndReturnArgs>(args: SelectSubset<T, CursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
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
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instituicao<T extends InstituicaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstituicaoDefaultArgs<ExtArgs>>): Prisma__InstituicaoClient<$Result.GetResult<Prisma.$InstituicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoCurso<T extends TipoCursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoCursoDefaultArgs<ExtArgs>>): Prisma__TipoCursoClient<$Result.GetResult<Prisma.$TipoCursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplinas<T extends Curso$disciplinasArgs<ExtArgs> = {}>(args?: Subset<T, Curso$disciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */
  interface CursoFieldRefs {
    readonly id_curso: FieldRef<"Curso", 'Int'>
    readonly id_instituicao: FieldRef<"Curso", 'Int'>
    readonly id_tipo_curso: FieldRef<"Curso", 'Int'>
    readonly tx_descricao: FieldRef<"Curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
  }

  /**
   * Curso updateManyAndReturn
   */
  export type CursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
    /**
     * Limit how many Cursos to delete.
     */
    limit?: number
  }

  /**
   * Curso.disciplinas
   */
  export type Curso$disciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    cursor?: DisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curso
     */
    omit?: CursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model TipoDisciplina
   */

  export type AggregateTipoDisciplina = {
    _count: TipoDisciplinaCountAggregateOutputType | null
    _avg: TipoDisciplinaAvgAggregateOutputType | null
    _sum: TipoDisciplinaSumAggregateOutputType | null
    _min: TipoDisciplinaMinAggregateOutputType | null
    _max: TipoDisciplinaMaxAggregateOutputType | null
  }

  export type TipoDisciplinaAvgAggregateOutputType = {
    id_tipo_disciplina: number | null
  }

  export type TipoDisciplinaSumAggregateOutputType = {
    id_tipo_disciplina: number | null
  }

  export type TipoDisciplinaMinAggregateOutputType = {
    id_tipo_disciplina: number | null
    tx_descricao: string | null
  }

  export type TipoDisciplinaMaxAggregateOutputType = {
    id_tipo_disciplina: number | null
    tx_descricao: string | null
  }

  export type TipoDisciplinaCountAggregateOutputType = {
    id_tipo_disciplina: number
    tx_descricao: number
    _all: number
  }


  export type TipoDisciplinaAvgAggregateInputType = {
    id_tipo_disciplina?: true
  }

  export type TipoDisciplinaSumAggregateInputType = {
    id_tipo_disciplina?: true
  }

  export type TipoDisciplinaMinAggregateInputType = {
    id_tipo_disciplina?: true
    tx_descricao?: true
  }

  export type TipoDisciplinaMaxAggregateInputType = {
    id_tipo_disciplina?: true
    tx_descricao?: true
  }

  export type TipoDisciplinaCountAggregateInputType = {
    id_tipo_disciplina?: true
    tx_descricao?: true
    _all?: true
  }

  export type TipoDisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDisciplina to aggregate.
     */
    where?: TipoDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDisciplinas to fetch.
     */
    orderBy?: TipoDisciplinaOrderByWithRelationInput | TipoDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoDisciplinas
    **/
    _count?: true | TipoDisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoDisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoDisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoDisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoDisciplinaMaxAggregateInputType
  }

  export type GetTipoDisciplinaAggregateType<T extends TipoDisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoDisciplina[P]>
      : GetScalarType<T[P], AggregateTipoDisciplina[P]>
  }




  export type TipoDisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoDisciplinaWhereInput
    orderBy?: TipoDisciplinaOrderByWithAggregationInput | TipoDisciplinaOrderByWithAggregationInput[]
    by: TipoDisciplinaScalarFieldEnum[] | TipoDisciplinaScalarFieldEnum
    having?: TipoDisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoDisciplinaCountAggregateInputType | true
    _avg?: TipoDisciplinaAvgAggregateInputType
    _sum?: TipoDisciplinaSumAggregateInputType
    _min?: TipoDisciplinaMinAggregateInputType
    _max?: TipoDisciplinaMaxAggregateInputType
  }

  export type TipoDisciplinaGroupByOutputType = {
    id_tipo_disciplina: number
    tx_descricao: string
    _count: TipoDisciplinaCountAggregateOutputType | null
    _avg: TipoDisciplinaAvgAggregateOutputType | null
    _sum: TipoDisciplinaSumAggregateOutputType | null
    _min: TipoDisciplinaMinAggregateOutputType | null
    _max: TipoDisciplinaMaxAggregateOutputType | null
  }

  type GetTipoDisciplinaGroupByPayload<T extends TipoDisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoDisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoDisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoDisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoDisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type TipoDisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_disciplina?: boolean
    tx_descricao?: boolean
    disciplinas?: boolean | TipoDisciplina$disciplinasArgs<ExtArgs>
    _count?: boolean | TipoDisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoDisciplina"]>

  export type TipoDisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_disciplina?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["tipoDisciplina"]>

  export type TipoDisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_disciplina?: boolean
    tx_descricao?: boolean
  }, ExtArgs["result"]["tipoDisciplina"]>

  export type TipoDisciplinaSelectScalar = {
    id_tipo_disciplina?: boolean
    tx_descricao?: boolean
  }

  export type TipoDisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo_disciplina" | "tx_descricao", ExtArgs["result"]["tipoDisciplina"]>
  export type TipoDisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | TipoDisciplina$disciplinasArgs<ExtArgs>
    _count?: boolean | TipoDisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoDisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoDisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoDisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoDisciplina"
    objects: {
      disciplinas: Prisma.$DisciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_disciplina: number
      tx_descricao: string
    }, ExtArgs["result"]["tipoDisciplina"]>
    composites: {}
  }

  type TipoDisciplinaGetPayload<S extends boolean | null | undefined | TipoDisciplinaDefaultArgs> = $Result.GetResult<Prisma.$TipoDisciplinaPayload, S>

  type TipoDisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoDisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoDisciplinaCountAggregateInputType | true
    }

  export interface TipoDisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoDisciplina'], meta: { name: 'TipoDisciplina' } }
    /**
     * Find zero or one TipoDisciplina that matches the filter.
     * @param {TipoDisciplinaFindUniqueArgs} args - Arguments to find a TipoDisciplina
     * @example
     * // Get one TipoDisciplina
     * const tipoDisciplina = await prisma.tipoDisciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoDisciplinaFindUniqueArgs>(args: SelectSubset<T, TipoDisciplinaFindUniqueArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoDisciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoDisciplinaFindUniqueOrThrowArgs} args - Arguments to find a TipoDisciplina
     * @example
     * // Get one TipoDisciplina
     * const tipoDisciplina = await prisma.tipoDisciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoDisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoDisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDisciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDisciplinaFindFirstArgs} args - Arguments to find a TipoDisciplina
     * @example
     * // Get one TipoDisciplina
     * const tipoDisciplina = await prisma.tipoDisciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoDisciplinaFindFirstArgs>(args?: SelectSubset<T, TipoDisciplinaFindFirstArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDisciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDisciplinaFindFirstOrThrowArgs} args - Arguments to find a TipoDisciplina
     * @example
     * // Get one TipoDisciplina
     * const tipoDisciplina = await prisma.tipoDisciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoDisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoDisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoDisciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoDisciplinas
     * const tipoDisciplinas = await prisma.tipoDisciplina.findMany()
     * 
     * // Get first 10 TipoDisciplinas
     * const tipoDisciplinas = await prisma.tipoDisciplina.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_disciplina`
     * const tipoDisciplinaWithId_tipo_disciplinaOnly = await prisma.tipoDisciplina.findMany({ select: { id_tipo_disciplina: true } })
     * 
     */
    findMany<T extends TipoDisciplinaFindManyArgs>(args?: SelectSubset<T, TipoDisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoDisciplina.
     * @param {TipoDisciplinaCreateArgs} args - Arguments to create a TipoDisciplina.
     * @example
     * // Create one TipoDisciplina
     * const TipoDisciplina = await prisma.tipoDisciplina.create({
     *   data: {
     *     // ... data to create a TipoDisciplina
     *   }
     * })
     * 
     */
    create<T extends TipoDisciplinaCreateArgs>(args: SelectSubset<T, TipoDisciplinaCreateArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoDisciplinas.
     * @param {TipoDisciplinaCreateManyArgs} args - Arguments to create many TipoDisciplinas.
     * @example
     * // Create many TipoDisciplinas
     * const tipoDisciplina = await prisma.tipoDisciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoDisciplinaCreateManyArgs>(args?: SelectSubset<T, TipoDisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoDisciplinas and returns the data saved in the database.
     * @param {TipoDisciplinaCreateManyAndReturnArgs} args - Arguments to create many TipoDisciplinas.
     * @example
     * // Create many TipoDisciplinas
     * const tipoDisciplina = await prisma.tipoDisciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoDisciplinas and only return the `id_tipo_disciplina`
     * const tipoDisciplinaWithId_tipo_disciplinaOnly = await prisma.tipoDisciplina.createManyAndReturn({
     *   select: { id_tipo_disciplina: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoDisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoDisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoDisciplina.
     * @param {TipoDisciplinaDeleteArgs} args - Arguments to delete one TipoDisciplina.
     * @example
     * // Delete one TipoDisciplina
     * const TipoDisciplina = await prisma.tipoDisciplina.delete({
     *   where: {
     *     // ... filter to delete one TipoDisciplina
     *   }
     * })
     * 
     */
    delete<T extends TipoDisciplinaDeleteArgs>(args: SelectSubset<T, TipoDisciplinaDeleteArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoDisciplina.
     * @param {TipoDisciplinaUpdateArgs} args - Arguments to update one TipoDisciplina.
     * @example
     * // Update one TipoDisciplina
     * const tipoDisciplina = await prisma.tipoDisciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoDisciplinaUpdateArgs>(args: SelectSubset<T, TipoDisciplinaUpdateArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoDisciplinas.
     * @param {TipoDisciplinaDeleteManyArgs} args - Arguments to filter TipoDisciplinas to delete.
     * @example
     * // Delete a few TipoDisciplinas
     * const { count } = await prisma.tipoDisciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDisciplinaDeleteManyArgs>(args?: SelectSubset<T, TipoDisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoDisciplinas
     * const tipoDisciplina = await prisma.tipoDisciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoDisciplinaUpdateManyArgs>(args: SelectSubset<T, TipoDisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDisciplinas and returns the data updated in the database.
     * @param {TipoDisciplinaUpdateManyAndReturnArgs} args - Arguments to update many TipoDisciplinas.
     * @example
     * // Update many TipoDisciplinas
     * const tipoDisciplina = await prisma.tipoDisciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoDisciplinas and only return the `id_tipo_disciplina`
     * const tipoDisciplinaWithId_tipo_disciplinaOnly = await prisma.tipoDisciplina.updateManyAndReturn({
     *   select: { id_tipo_disciplina: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoDisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoDisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoDisciplina.
     * @param {TipoDisciplinaUpsertArgs} args - Arguments to update or create a TipoDisciplina.
     * @example
     * // Update or create a TipoDisciplina
     * const tipoDisciplina = await prisma.tipoDisciplina.upsert({
     *   create: {
     *     // ... data to create a TipoDisciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoDisciplina we want to update
     *   }
     * })
     */
    upsert<T extends TipoDisciplinaUpsertArgs>(args: SelectSubset<T, TipoDisciplinaUpsertArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoDisciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDisciplinaCountArgs} args - Arguments to filter TipoDisciplinas to count.
     * @example
     * // Count the number of TipoDisciplinas
     * const count = await prisma.tipoDisciplina.count({
     *   where: {
     *     // ... the filter for the TipoDisciplinas we want to count
     *   }
     * })
    **/
    count<T extends TipoDisciplinaCountArgs>(
      args?: Subset<T, TipoDisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoDisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoDisciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoDisciplinaAggregateArgs>(args: Subset<T, TipoDisciplinaAggregateArgs>): Prisma.PrismaPromise<GetTipoDisciplinaAggregateType<T>>

    /**
     * Group by TipoDisciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDisciplinaGroupByArgs} args - Group by arguments.
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
      T extends TipoDisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoDisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: TipoDisciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoDisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoDisciplina model
   */
  readonly fields: TipoDisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoDisciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoDisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplinas<T extends TipoDisciplina$disciplinasArgs<ExtArgs> = {}>(args?: Subset<T, TipoDisciplina$disciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoDisciplina model
   */
  interface TipoDisciplinaFieldRefs {
    readonly id_tipo_disciplina: FieldRef<"TipoDisciplina", 'Int'>
    readonly tx_descricao: FieldRef<"TipoDisciplina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoDisciplina findUnique
   */
  export type TipoDisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDisciplina to fetch.
     */
    where: TipoDisciplinaWhereUniqueInput
  }

  /**
   * TipoDisciplina findUniqueOrThrow
   */
  export type TipoDisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDisciplina to fetch.
     */
    where: TipoDisciplinaWhereUniqueInput
  }

  /**
   * TipoDisciplina findFirst
   */
  export type TipoDisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDisciplina to fetch.
     */
    where?: TipoDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDisciplinas to fetch.
     */
    orderBy?: TipoDisciplinaOrderByWithRelationInput | TipoDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDisciplinas.
     */
    cursor?: TipoDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDisciplinas.
     */
    distinct?: TipoDisciplinaScalarFieldEnum | TipoDisciplinaScalarFieldEnum[]
  }

  /**
   * TipoDisciplina findFirstOrThrow
   */
  export type TipoDisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDisciplina to fetch.
     */
    where?: TipoDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDisciplinas to fetch.
     */
    orderBy?: TipoDisciplinaOrderByWithRelationInput | TipoDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDisciplinas.
     */
    cursor?: TipoDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDisciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDisciplinas.
     */
    distinct?: TipoDisciplinaScalarFieldEnum | TipoDisciplinaScalarFieldEnum[]
  }

  /**
   * TipoDisciplina findMany
   */
  export type TipoDisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which TipoDisciplinas to fetch.
     */
    where?: TipoDisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDisciplinas to fetch.
     */
    orderBy?: TipoDisciplinaOrderByWithRelationInput | TipoDisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoDisciplinas.
     */
    cursor?: TipoDisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDisciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDisciplinas.
     */
    skip?: number
    distinct?: TipoDisciplinaScalarFieldEnum | TipoDisciplinaScalarFieldEnum[]
  }

  /**
   * TipoDisciplina create
   */
  export type TipoDisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoDisciplina.
     */
    data: XOR<TipoDisciplinaCreateInput, TipoDisciplinaUncheckedCreateInput>
  }

  /**
   * TipoDisciplina createMany
   */
  export type TipoDisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoDisciplinas.
     */
    data: TipoDisciplinaCreateManyInput | TipoDisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoDisciplina createManyAndReturn
   */
  export type TipoDisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many TipoDisciplinas.
     */
    data: TipoDisciplinaCreateManyInput | TipoDisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoDisciplina update
   */
  export type TipoDisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoDisciplina.
     */
    data: XOR<TipoDisciplinaUpdateInput, TipoDisciplinaUncheckedUpdateInput>
    /**
     * Choose, which TipoDisciplina to update.
     */
    where: TipoDisciplinaWhereUniqueInput
  }

  /**
   * TipoDisciplina updateMany
   */
  export type TipoDisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoDisciplinas.
     */
    data: XOR<TipoDisciplinaUpdateManyMutationInput, TipoDisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which TipoDisciplinas to update
     */
    where?: TipoDisciplinaWhereInput
    /**
     * Limit how many TipoDisciplinas to update.
     */
    limit?: number
  }

  /**
   * TipoDisciplina updateManyAndReturn
   */
  export type TipoDisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update TipoDisciplinas.
     */
    data: XOR<TipoDisciplinaUpdateManyMutationInput, TipoDisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which TipoDisciplinas to update
     */
    where?: TipoDisciplinaWhereInput
    /**
     * Limit how many TipoDisciplinas to update.
     */
    limit?: number
  }

  /**
   * TipoDisciplina upsert
   */
  export type TipoDisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoDisciplina to update in case it exists.
     */
    where: TipoDisciplinaWhereUniqueInput
    /**
     * In case the TipoDisciplina found by the `where` argument doesn't exist, create a new TipoDisciplina with this data.
     */
    create: XOR<TipoDisciplinaCreateInput, TipoDisciplinaUncheckedCreateInput>
    /**
     * In case the TipoDisciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoDisciplinaUpdateInput, TipoDisciplinaUncheckedUpdateInput>
  }

  /**
   * TipoDisciplina delete
   */
  export type TipoDisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
    /**
     * Filter which TipoDisciplina to delete.
     */
    where: TipoDisciplinaWhereUniqueInput
  }

  /**
   * TipoDisciplina deleteMany
   */
  export type TipoDisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDisciplinas to delete
     */
    where?: TipoDisciplinaWhereInput
    /**
     * Limit how many TipoDisciplinas to delete.
     */
    limit?: number
  }

  /**
   * TipoDisciplina.disciplinas
   */
  export type TipoDisciplina$disciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    cursor?: DisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * TipoDisciplina without action
   */
  export type TipoDisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDisciplina
     */
    select?: TipoDisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDisciplina
     */
    omit?: TipoDisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model Disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaAvgAggregateOutputType = {
    id_disciplina: number | null
    id_curso: number | null
    id_tipo_disciplina: number | null
    in_periodo: number | null
    in_carga_horaria: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    id_disciplina: number | null
    id_curso: number | null
    id_tipo_disciplina: number | null
    in_periodo: number | null
    in_carga_horaria: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    id_disciplina: number | null
    id_curso: number | null
    id_tipo_disciplina: number | null
    tx_sigla: string | null
    tx_descricao: string | null
    in_periodo: number | null
    in_carga_horaria: number | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    id_disciplina: number | null
    id_curso: number | null
    id_tipo_disciplina: number | null
    tx_sigla: string | null
    tx_descricao: string | null
    in_periodo: number | null
    in_carga_horaria: number | null
  }

  export type DisciplinaCountAggregateOutputType = {
    id_disciplina: number
    id_curso: number
    id_tipo_disciplina: number
    tx_sigla: number
    tx_descricao: number
    in_periodo: number
    in_carga_horaria: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    in_periodo?: true
    in_carga_horaria?: true
  }

  export type DisciplinaSumAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    in_periodo?: true
    in_carga_horaria?: true
  }

  export type DisciplinaMinAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    tx_sigla?: true
    tx_descricao?: true
    in_periodo?: true
    in_carga_horaria?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    tx_sigla?: true
    tx_descricao?: true
    in_periodo?: true
    in_carga_horaria?: true
  }

  export type DisciplinaCountAggregateInputType = {
    id_disciplina?: true
    id_curso?: true
    id_tipo_disciplina?: true
    tx_sigla?: true
    tx_descricao?: true
    in_periodo?: true
    in_carga_horaria?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplina to aggregate.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type DisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithAggregationInput | DisciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: DisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _avg?: DisciplinaAvgAggregateInputType
    _sum?: DisciplinaSumAggregateInputType
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    id_disciplina: number
    id_curso: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends DisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disciplina?: boolean
    id_curso?: boolean
    id_tipo_disciplina?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    in_periodo?: boolean
    in_carga_horaria?: boolean
    tipoDisciplina?: boolean | TipoDisciplinaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    leciona?: boolean | Disciplina$lecionaArgs<ExtArgs>
    cursa?: boolean | Disciplina$cursaArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disciplina?: boolean
    id_curso?: boolean
    id_tipo_disciplina?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    in_periodo?: boolean
    in_carga_horaria?: boolean
    tipoDisciplina?: boolean | TipoDisciplinaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_disciplina?: boolean
    id_curso?: boolean
    id_tipo_disciplina?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    in_periodo?: boolean
    in_carga_horaria?: boolean
    tipoDisciplina?: boolean | TipoDisciplinaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>

  export type DisciplinaSelectScalar = {
    id_disciplina?: boolean
    id_curso?: boolean
    id_tipo_disciplina?: boolean
    tx_sigla?: boolean
    tx_descricao?: boolean
    in_periodo?: boolean
    in_carga_horaria?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_disciplina" | "id_curso" | "id_tipo_disciplina" | "tx_sigla" | "tx_descricao" | "in_periodo" | "in_carga_horaria", ExtArgs["result"]["disciplina"]>
  export type DisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoDisciplina?: boolean | TipoDisciplinaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    leciona?: boolean | Disciplina$lecionaArgs<ExtArgs>
    cursa?: boolean | Disciplina$cursaArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoDisciplina?: boolean | TipoDisciplinaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }
  export type DisciplinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoDisciplina?: boolean | TipoDisciplinaDefaultArgs<ExtArgs>
    curso?: boolean | CursoDefaultArgs<ExtArgs>
  }

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {
      tipoDisciplina: Prisma.$TipoDisciplinaPayload<ExtArgs>
      curso: Prisma.$CursoPayload<ExtArgs>
      leciona: Prisma.$LecionaPayload<ExtArgs>[]
      cursa: Prisma.$CursaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_disciplina: number
      id_curso: number
      id_tipo_disciplina: number
      tx_sigla: string
      tx_descricao: string
      in_periodo: number
      in_carga_horaria: number
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type DisciplinaGetPayload<S extends boolean | null | undefined | DisciplinaDefaultArgs> = $Result.GetResult<Prisma.$DisciplinaPayload, S>

  type DisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface DisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplina'], meta: { name: 'Disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {DisciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinaFindUniqueArgs>(args: SelectSubset<T, DisciplinaFindUniqueArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinaFindFirstArgs>(args?: SelectSubset<T, DisciplinaFindFirstArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `id_disciplina`
     * const disciplinaWithId_disciplinaOnly = await prisma.disciplina.findMany({ select: { id_disciplina: true } })
     * 
     */
    findMany<T extends DisciplinaFindManyArgs>(args?: SelectSubset<T, DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {DisciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends DisciplinaCreateArgs>(args: SelectSubset<T, DisciplinaCreateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {DisciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinaCreateManyArgs>(args?: SelectSubset<T, DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disciplinas and returns the data saved in the database.
     * @param {DisciplinaCreateManyAndReturnArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disciplinas and only return the `id_disciplina`
     * const disciplinaWithId_disciplinaOnly = await prisma.disciplina.createManyAndReturn({
     *   select: { id_disciplina: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisciplinaCreateManyAndReturnArgs>(args?: SelectSubset<T, DisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disciplina.
     * @param {DisciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends DisciplinaDeleteArgs>(args: SelectSubset<T, DisciplinaDeleteArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {DisciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinaUpdateArgs>(args: SelectSubset<T, DisciplinaUpdateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinaDeleteManyArgs>(args?: SelectSubset<T, DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinaUpdateManyArgs>(args: SelectSubset<T, DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas and returns the data updated in the database.
     * @param {DisciplinaUpdateManyAndReturnArgs} args - Arguments to update many Disciplinas.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disciplinas and only return the `id_disciplina`
     * const disciplinaWithId_disciplinaOnly = await prisma.disciplina.updateManyAndReturn({
     *   select: { id_disciplina: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisciplinaUpdateManyAndReturnArgs>(args: SelectSubset<T, DisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disciplina.
     * @param {DisciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinaUpsertArgs>(args: SelectSubset<T, DisciplinaUpsertArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinaCountArgs>(
      args?: Subset<T, DisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaGroupByArgs} args - Group by arguments.
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
      T extends DisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplina model
   */
  readonly fields: DisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipoDisciplina<T extends TipoDisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDisciplinaDefaultArgs<ExtArgs>>): Prisma__TipoDisciplinaClient<$Result.GetResult<Prisma.$TipoDisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leciona<T extends Disciplina$lecionaArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$lecionaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cursa<T extends Disciplina$cursaArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$cursaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disciplina model
   */
  interface DisciplinaFieldRefs {
    readonly id_disciplina: FieldRef<"Disciplina", 'Int'>
    readonly id_curso: FieldRef<"Disciplina", 'Int'>
    readonly id_tipo_disciplina: FieldRef<"Disciplina", 'Int'>
    readonly tx_sigla: FieldRef<"Disciplina", 'String'>
    readonly tx_descricao: FieldRef<"Disciplina", 'String'>
    readonly in_periodo: FieldRef<"Disciplina", 'Int'>
    readonly in_carga_horaria: FieldRef<"Disciplina", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Disciplina findUnique
   */
  export type DisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findUniqueOrThrow
   */
  export type DisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findFirst
   */
  export type DisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findFirstOrThrow
   */
  export type DisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findMany
   */
  export type DisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina create
   */
  export type DisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplina.
     */
    data: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
  }

  /**
   * Disciplina createMany
   */
  export type DisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina createManyAndReturn
   */
  export type DisciplinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disciplina update
   */
  export type DisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplina.
     */
    data: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
    /**
     * Choose, which Disciplina to update.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina updateMany
   */
  export type DisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina updateManyAndReturn
   */
  export type DisciplinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Disciplina upsert
   */
  export type DisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplina to update in case it exists.
     */
    where: DisciplinaWhereUniqueInput
    /**
     * In case the Disciplina found by the `where` argument doesn't exist, create a new Disciplina with this data.
     */
    create: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
    /**
     * In case the Disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
  }

  /**
   * Disciplina delete
   */
  export type DisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter which Disciplina to delete.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina deleteMany
   */
  export type DisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to delete.
     */
    limit?: number
  }

  /**
   * Disciplina.leciona
   */
  export type Disciplina$lecionaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    where?: LecionaWhereInput
    orderBy?: LecionaOrderByWithRelationInput | LecionaOrderByWithRelationInput[]
    cursor?: LecionaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * Disciplina.cursa
   */
  export type Disciplina$cursaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    where?: CursaWhereInput
    orderBy?: CursaOrderByWithRelationInput | CursaOrderByWithRelationInput[]
    cursor?: CursaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * Disciplina without action
   */
  export type DisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model Leciona
   */

  export type AggregateLeciona = {
    _count: LecionaCountAggregateOutputType | null
    _avg: LecionaAvgAggregateOutputType | null
    _sum: LecionaSumAggregateOutputType | null
    _min: LecionaMinAggregateOutputType | null
    _max: LecionaMaxAggregateOutputType | null
  }

  export type LecionaAvgAggregateOutputType = {
    id_leciona: number | null
    id_professor: number | null
    id_disciplina: number | null
  }

  export type LecionaSumAggregateOutputType = {
    id_leciona: number | null
    id_professor: number | null
    id_disciplina: number | null
  }

  export type LecionaMinAggregateOutputType = {
    id_leciona: number | null
    id_professor: number | null
    id_disciplina: number | null
  }

  export type LecionaMaxAggregateOutputType = {
    id_leciona: number | null
    id_professor: number | null
    id_disciplina: number | null
  }

  export type LecionaCountAggregateOutputType = {
    id_leciona: number
    id_professor: number
    id_disciplina: number
    _all: number
  }


  export type LecionaAvgAggregateInputType = {
    id_leciona?: true
    id_professor?: true
    id_disciplina?: true
  }

  export type LecionaSumAggregateInputType = {
    id_leciona?: true
    id_professor?: true
    id_disciplina?: true
  }

  export type LecionaMinAggregateInputType = {
    id_leciona?: true
    id_professor?: true
    id_disciplina?: true
  }

  export type LecionaMaxAggregateInputType = {
    id_leciona?: true
    id_professor?: true
    id_disciplina?: true
  }

  export type LecionaCountAggregateInputType = {
    id_leciona?: true
    id_professor?: true
    id_disciplina?: true
    _all?: true
  }

  export type LecionaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leciona to aggregate.
     */
    where?: LecionaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecionas to fetch.
     */
    orderBy?: LecionaOrderByWithRelationInput | LecionaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecionaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecionas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecionas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lecionas
    **/
    _count?: true | LecionaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecionaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecionaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecionaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecionaMaxAggregateInputType
  }

  export type GetLecionaAggregateType<T extends LecionaAggregateArgs> = {
        [P in keyof T & keyof AggregateLeciona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeciona[P]>
      : GetScalarType<T[P], AggregateLeciona[P]>
  }




  export type LecionaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecionaWhereInput
    orderBy?: LecionaOrderByWithAggregationInput | LecionaOrderByWithAggregationInput[]
    by: LecionaScalarFieldEnum[] | LecionaScalarFieldEnum
    having?: LecionaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecionaCountAggregateInputType | true
    _avg?: LecionaAvgAggregateInputType
    _sum?: LecionaSumAggregateInputType
    _min?: LecionaMinAggregateInputType
    _max?: LecionaMaxAggregateInputType
  }

  export type LecionaGroupByOutputType = {
    id_leciona: number
    id_professor: number
    id_disciplina: number
    _count: LecionaCountAggregateOutputType | null
    _avg: LecionaAvgAggregateOutputType | null
    _sum: LecionaSumAggregateOutputType | null
    _min: LecionaMinAggregateOutputType | null
    _max: LecionaMaxAggregateOutputType | null
  }

  type GetLecionaGroupByPayload<T extends LecionaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecionaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecionaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecionaGroupByOutputType[P]>
            : GetScalarType<T[P], LecionaGroupByOutputType[P]>
        }
      >
    >


  export type LecionaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_leciona?: boolean
    id_professor?: boolean
    id_disciplina?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leciona"]>

  export type LecionaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_leciona?: boolean
    id_professor?: boolean
    id_disciplina?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leciona"]>

  export type LecionaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_leciona?: boolean
    id_professor?: boolean
    id_disciplina?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leciona"]>

  export type LecionaSelectScalar = {
    id_leciona?: boolean
    id_professor?: boolean
    id_disciplina?: boolean
  }

  export type LecionaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_leciona" | "id_professor" | "id_disciplina", ExtArgs["result"]["leciona"]>
  export type LecionaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type LecionaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type LecionaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }

  export type $LecionaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leciona"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      disciplina: Prisma.$DisciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_leciona: number
      id_professor: number
      id_disciplina: number
    }, ExtArgs["result"]["leciona"]>
    composites: {}
  }

  type LecionaGetPayload<S extends boolean | null | undefined | LecionaDefaultArgs> = $Result.GetResult<Prisma.$LecionaPayload, S>

  type LecionaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecionaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecionaCountAggregateInputType | true
    }

  export interface LecionaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leciona'], meta: { name: 'Leciona' } }
    /**
     * Find zero or one Leciona that matches the filter.
     * @param {LecionaFindUniqueArgs} args - Arguments to find a Leciona
     * @example
     * // Get one Leciona
     * const leciona = await prisma.leciona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecionaFindUniqueArgs>(args: SelectSubset<T, LecionaFindUniqueArgs<ExtArgs>>): Prisma__LecionaClient<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leciona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecionaFindUniqueOrThrowArgs} args - Arguments to find a Leciona
     * @example
     * // Get one Leciona
     * const leciona = await prisma.leciona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecionaFindUniqueOrThrowArgs>(args: SelectSubset<T, LecionaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecionaClient<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leciona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecionaFindFirstArgs} args - Arguments to find a Leciona
     * @example
     * // Get one Leciona
     * const leciona = await prisma.leciona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecionaFindFirstArgs>(args?: SelectSubset<T, LecionaFindFirstArgs<ExtArgs>>): Prisma__LecionaClient<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leciona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecionaFindFirstOrThrowArgs} args - Arguments to find a Leciona
     * @example
     * // Get one Leciona
     * const leciona = await prisma.leciona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecionaFindFirstOrThrowArgs>(args?: SelectSubset<T, LecionaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecionaClient<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecionas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecionaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecionas
     * const lecionas = await prisma.leciona.findMany()
     * 
     * // Get first 10 Lecionas
     * const lecionas = await prisma.leciona.findMany({ take: 10 })
     * 
     * // Only select the `id_leciona`
     * const lecionaWithId_lecionaOnly = await prisma.leciona.findMany({ select: { id_leciona: true } })
     * 
     */
    findMany<T extends LecionaFindManyArgs>(args?: SelectSubset<T, LecionaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leciona.
     * @param {LecionaCreateArgs} args - Arguments to create a Leciona.
     * @example
     * // Create one Leciona
     * const Leciona = await prisma.leciona.create({
     *   data: {
     *     // ... data to create a Leciona
     *   }
     * })
     * 
     */
    create<T extends LecionaCreateArgs>(args: SelectSubset<T, LecionaCreateArgs<ExtArgs>>): Prisma__LecionaClient<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecionas.
     * @param {LecionaCreateManyArgs} args - Arguments to create many Lecionas.
     * @example
     * // Create many Lecionas
     * const leciona = await prisma.leciona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecionaCreateManyArgs>(args?: SelectSubset<T, LecionaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lecionas and returns the data saved in the database.
     * @param {LecionaCreateManyAndReturnArgs} args - Arguments to create many Lecionas.
     * @example
     * // Create many Lecionas
     * const leciona = await prisma.leciona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lecionas and only return the `id_leciona`
     * const lecionaWithId_lecionaOnly = await prisma.leciona.createManyAndReturn({
     *   select: { id_leciona: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LecionaCreateManyAndReturnArgs>(args?: SelectSubset<T, LecionaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leciona.
     * @param {LecionaDeleteArgs} args - Arguments to delete one Leciona.
     * @example
     * // Delete one Leciona
     * const Leciona = await prisma.leciona.delete({
     *   where: {
     *     // ... filter to delete one Leciona
     *   }
     * })
     * 
     */
    delete<T extends LecionaDeleteArgs>(args: SelectSubset<T, LecionaDeleteArgs<ExtArgs>>): Prisma__LecionaClient<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leciona.
     * @param {LecionaUpdateArgs} args - Arguments to update one Leciona.
     * @example
     * // Update one Leciona
     * const leciona = await prisma.leciona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecionaUpdateArgs>(args: SelectSubset<T, LecionaUpdateArgs<ExtArgs>>): Prisma__LecionaClient<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecionas.
     * @param {LecionaDeleteManyArgs} args - Arguments to filter Lecionas to delete.
     * @example
     * // Delete a few Lecionas
     * const { count } = await prisma.leciona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecionaDeleteManyArgs>(args?: SelectSubset<T, LecionaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecionas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecionaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecionas
     * const leciona = await prisma.leciona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecionaUpdateManyArgs>(args: SelectSubset<T, LecionaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecionas and returns the data updated in the database.
     * @param {LecionaUpdateManyAndReturnArgs} args - Arguments to update many Lecionas.
     * @example
     * // Update many Lecionas
     * const leciona = await prisma.leciona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lecionas and only return the `id_leciona`
     * const lecionaWithId_lecionaOnly = await prisma.leciona.updateManyAndReturn({
     *   select: { id_leciona: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LecionaUpdateManyAndReturnArgs>(args: SelectSubset<T, LecionaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leciona.
     * @param {LecionaUpsertArgs} args - Arguments to update or create a Leciona.
     * @example
     * // Update or create a Leciona
     * const leciona = await prisma.leciona.upsert({
     *   create: {
     *     // ... data to create a Leciona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leciona we want to update
     *   }
     * })
     */
    upsert<T extends LecionaUpsertArgs>(args: SelectSubset<T, LecionaUpsertArgs<ExtArgs>>): Prisma__LecionaClient<$Result.GetResult<Prisma.$LecionaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecionas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecionaCountArgs} args - Arguments to filter Lecionas to count.
     * @example
     * // Count the number of Lecionas
     * const count = await prisma.leciona.count({
     *   where: {
     *     // ... the filter for the Lecionas we want to count
     *   }
     * })
    **/
    count<T extends LecionaCountArgs>(
      args?: Subset<T, LecionaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecionaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leciona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecionaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecionaAggregateArgs>(args: Subset<T, LecionaAggregateArgs>): Prisma.PrismaPromise<GetLecionaAggregateType<T>>

    /**
     * Group by Leciona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecionaGroupByArgs} args - Group by arguments.
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
      T extends LecionaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecionaGroupByArgs['orderBy'] }
        : { orderBy?: LecionaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LecionaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecionaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leciona model
   */
  readonly fields: LecionaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leciona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecionaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Leciona model
   */
  interface LecionaFieldRefs {
    readonly id_leciona: FieldRef<"Leciona", 'Int'>
    readonly id_professor: FieldRef<"Leciona", 'Int'>
    readonly id_disciplina: FieldRef<"Leciona", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Leciona findUnique
   */
  export type LecionaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * Filter, which Leciona to fetch.
     */
    where: LecionaWhereUniqueInput
  }

  /**
   * Leciona findUniqueOrThrow
   */
  export type LecionaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * Filter, which Leciona to fetch.
     */
    where: LecionaWhereUniqueInput
  }

  /**
   * Leciona findFirst
   */
  export type LecionaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * Filter, which Leciona to fetch.
     */
    where?: LecionaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecionas to fetch.
     */
    orderBy?: LecionaOrderByWithRelationInput | LecionaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecionas.
     */
    cursor?: LecionaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecionas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecionas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecionas.
     */
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * Leciona findFirstOrThrow
   */
  export type LecionaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * Filter, which Leciona to fetch.
     */
    where?: LecionaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecionas to fetch.
     */
    orderBy?: LecionaOrderByWithRelationInput | LecionaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecionas.
     */
    cursor?: LecionaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecionas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecionas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecionas.
     */
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * Leciona findMany
   */
  export type LecionaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * Filter, which Lecionas to fetch.
     */
    where?: LecionaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecionas to fetch.
     */
    orderBy?: LecionaOrderByWithRelationInput | LecionaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lecionas.
     */
    cursor?: LecionaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecionas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecionas.
     */
    skip?: number
    distinct?: LecionaScalarFieldEnum | LecionaScalarFieldEnum[]
  }

  /**
   * Leciona create
   */
  export type LecionaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * The data needed to create a Leciona.
     */
    data: XOR<LecionaCreateInput, LecionaUncheckedCreateInput>
  }

  /**
   * Leciona createMany
   */
  export type LecionaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lecionas.
     */
    data: LecionaCreateManyInput | LecionaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leciona createManyAndReturn
   */
  export type LecionaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * The data used to create many Lecionas.
     */
    data: LecionaCreateManyInput | LecionaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leciona update
   */
  export type LecionaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * The data needed to update a Leciona.
     */
    data: XOR<LecionaUpdateInput, LecionaUncheckedUpdateInput>
    /**
     * Choose, which Leciona to update.
     */
    where: LecionaWhereUniqueInput
  }

  /**
   * Leciona updateMany
   */
  export type LecionaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lecionas.
     */
    data: XOR<LecionaUpdateManyMutationInput, LecionaUncheckedUpdateManyInput>
    /**
     * Filter which Lecionas to update
     */
    where?: LecionaWhereInput
    /**
     * Limit how many Lecionas to update.
     */
    limit?: number
  }

  /**
   * Leciona updateManyAndReturn
   */
  export type LecionaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * The data used to update Lecionas.
     */
    data: XOR<LecionaUpdateManyMutationInput, LecionaUncheckedUpdateManyInput>
    /**
     * Filter which Lecionas to update
     */
    where?: LecionaWhereInput
    /**
     * Limit how many Lecionas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leciona upsert
   */
  export type LecionaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * The filter to search for the Leciona to update in case it exists.
     */
    where: LecionaWhereUniqueInput
    /**
     * In case the Leciona found by the `where` argument doesn't exist, create a new Leciona with this data.
     */
    create: XOR<LecionaCreateInput, LecionaUncheckedCreateInput>
    /**
     * In case the Leciona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecionaUpdateInput, LecionaUncheckedUpdateInput>
  }

  /**
   * Leciona delete
   */
  export type LecionaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
    /**
     * Filter which Leciona to delete.
     */
    where: LecionaWhereUniqueInput
  }

  /**
   * Leciona deleteMany
   */
  export type LecionaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecionas to delete
     */
    where?: LecionaWhereInput
    /**
     * Limit how many Lecionas to delete.
     */
    limit?: number
  }

  /**
   * Leciona without action
   */
  export type LecionaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leciona
     */
    select?: LecionaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leciona
     */
    omit?: LecionaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecionaInclude<ExtArgs> | null
  }


  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoAvgAggregateOutputType = {
    id_aluno: number | null
  }

  export type AlunoSumAggregateOutputType = {
    id_aluno: number | null
  }

  export type AlunoMinAggregateOutputType = {
    id_aluno: number | null
    tx_nome: string | null
    tx_sexo: $Enums.Sexo | null
    dt_nascimento: Date | null
  }

  export type AlunoMaxAggregateOutputType = {
    id_aluno: number | null
    tx_nome: string | null
    tx_sexo: $Enums.Sexo | null
    dt_nascimento: Date | null
  }

  export type AlunoCountAggregateOutputType = {
    id_aluno: number
    tx_nome: number
    tx_sexo: number
    dt_nascimento: number
    _all: number
  }


  export type AlunoAvgAggregateInputType = {
    id_aluno?: true
  }

  export type AlunoSumAggregateInputType = {
    id_aluno?: true
  }

  export type AlunoMinAggregateInputType = {
    id_aluno?: true
    tx_nome?: true
    tx_sexo?: true
    dt_nascimento?: true
  }

  export type AlunoMaxAggregateInputType = {
    id_aluno?: true
    tx_nome?: true
    tx_sexo?: true
    dt_nascimento?: true
  }

  export type AlunoCountAggregateInputType = {
    id_aluno?: true
    tx_nome?: true
    tx_sexo?: true
    dt_nascimento?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _avg?: AlunoAvgAggregateInputType
    _sum?: AlunoSumAggregateInputType
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    id_aluno: number
    tx_nome: string
    tx_sexo: $Enums.Sexo
    dt_nascimento: Date
    _count: AlunoCountAggregateOutputType | null
    _avg: AlunoAvgAggregateOutputType | null
    _sum: AlunoSumAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    dt_nascimento?: boolean
    Cursa?: boolean | Aluno$CursaArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    dt_nascimento?: boolean
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_aluno?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    dt_nascimento?: boolean
  }, ExtArgs["result"]["aluno"]>

  export type AlunoSelectScalar = {
    id_aluno?: boolean
    tx_nome?: boolean
    tx_sexo?: boolean
    dt_nascimento?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_aluno" | "tx_nome" | "tx_sexo" | "dt_nascimento", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cursa?: boolean | Aluno$CursaArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlunoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlunoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      Cursa: Prisma.$CursaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_aluno: number
      tx_nome: string
      tx_sexo: $Enums.Sexo
      dt_nascimento: Date
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.findMany({ select: { id_aluno: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alunos and returns the data saved in the database.
     * @param {AlunoCreateManyAndReturnArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alunos and only return the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.createManyAndReturn({
     *   select: { id_aluno: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlunoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlunoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos and returns the data updated in the database.
     * @param {AlunoUpdateManyAndReturnArgs} args - Arguments to update many Alunos.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alunos and only return the `id_aluno`
     * const alunoWithId_alunoOnly = await prisma.aluno.updateManyAndReturn({
     *   select: { id_aluno: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlunoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlunoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cursa<T extends Aluno$CursaArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$CursaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly id_aluno: FieldRef<"Aluno", 'Int'>
    readonly tx_nome: FieldRef<"Aluno", 'String'>
    readonly tx_sexo: FieldRef<"Aluno", 'Sexo'>
    readonly dt_nascimento: FieldRef<"Aluno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno createManyAndReturn
   */
  export type AlunoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno updateManyAndReturn
   */
  export type AlunoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.Cursa
   */
  export type Aluno$CursaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    where?: CursaWhereInput
    orderBy?: CursaOrderByWithRelationInput | CursaOrderByWithRelationInput[]
    cursor?: CursaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model Cursa
   */

  export type AggregateCursa = {
    _count: CursaCountAggregateOutputType | null
    _avg: CursaAvgAggregateOutputType | null
    _sum: CursaSumAggregateOutputType | null
    _min: CursaMinAggregateOutputType | null
    _max: CursaMaxAggregateOutputType | null
  }

  export type CursaAvgAggregateOutputType = {
    id_cursa: number | null
    id_aluno: number | null
    id_disciplina: number | null
    in_ano: number | null
    in_semestre: number | null
    in_faltas: number | null
    nm_nota1: Decimal | null
    nm_nota2: Decimal | null
    nm_nota3: Decimal | null
  }

  export type CursaSumAggregateOutputType = {
    id_cursa: number | null
    id_aluno: number | null
    id_disciplina: number | null
    in_ano: number | null
    in_semestre: number | null
    in_faltas: number | null
    nm_nota1: Decimal | null
    nm_nota2: Decimal | null
    nm_nota3: Decimal | null
  }

  export type CursaMinAggregateOutputType = {
    id_cursa: number | null
    id_aluno: number | null
    id_disciplina: number | null
    in_ano: number | null
    in_semestre: number | null
    in_faltas: number | null
    nm_nota1: Decimal | null
    nm_nota2: Decimal | null
    nm_nota3: Decimal | null
    bl_aprovado: boolean | null
  }

  export type CursaMaxAggregateOutputType = {
    id_cursa: number | null
    id_aluno: number | null
    id_disciplina: number | null
    in_ano: number | null
    in_semestre: number | null
    in_faltas: number | null
    nm_nota1: Decimal | null
    nm_nota2: Decimal | null
    nm_nota3: Decimal | null
    bl_aprovado: boolean | null
  }

  export type CursaCountAggregateOutputType = {
    id_cursa: number
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas: number
    nm_nota1: number
    nm_nota2: number
    nm_nota3: number
    bl_aprovado: number
    _all: number
  }


  export type CursaAvgAggregateInputType = {
    id_cursa?: true
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nm_nota1?: true
    nm_nota2?: true
    nm_nota3?: true
  }

  export type CursaSumAggregateInputType = {
    id_cursa?: true
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nm_nota1?: true
    nm_nota2?: true
    nm_nota3?: true
  }

  export type CursaMinAggregateInputType = {
    id_cursa?: true
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nm_nota1?: true
    nm_nota2?: true
    nm_nota3?: true
    bl_aprovado?: true
  }

  export type CursaMaxAggregateInputType = {
    id_cursa?: true
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nm_nota1?: true
    nm_nota2?: true
    nm_nota3?: true
    bl_aprovado?: true
  }

  export type CursaCountAggregateInputType = {
    id_cursa?: true
    id_aluno?: true
    id_disciplina?: true
    in_ano?: true
    in_semestre?: true
    in_faltas?: true
    nm_nota1?: true
    nm_nota2?: true
    nm_nota3?: true
    bl_aprovado?: true
    _all?: true
  }

  export type CursaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursa to aggregate.
     */
    where?: CursaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursas to fetch.
     */
    orderBy?: CursaOrderByWithRelationInput | CursaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursas
    **/
    _count?: true | CursaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursaMaxAggregateInputType
  }

  export type GetCursaAggregateType<T extends CursaAggregateArgs> = {
        [P in keyof T & keyof AggregateCursa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursa[P]>
      : GetScalarType<T[P], AggregateCursa[P]>
  }




  export type CursaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursaWhereInput
    orderBy?: CursaOrderByWithAggregationInput | CursaOrderByWithAggregationInput[]
    by: CursaScalarFieldEnum[] | CursaScalarFieldEnum
    having?: CursaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursaCountAggregateInputType | true
    _avg?: CursaAvgAggregateInputType
    _sum?: CursaSumAggregateInputType
    _min?: CursaMinAggregateInputType
    _max?: CursaMaxAggregateInputType
  }

  export type CursaGroupByOutputType = {
    id_cursa: number
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas: number
    nm_nota1: Decimal
    nm_nota2: Decimal
    nm_nota3: Decimal
    bl_aprovado: boolean
    _count: CursaCountAggregateOutputType | null
    _avg: CursaAvgAggregateOutputType | null
    _sum: CursaSumAggregateOutputType | null
    _min: CursaMinAggregateOutputType | null
    _max: CursaMaxAggregateOutputType | null
  }

  type GetCursaGroupByPayload<T extends CursaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursaGroupByOutputType[P]>
            : GetScalarType<T[P], CursaGroupByOutputType[P]>
        }
      >
    >


  export type CursaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cursa?: boolean
    id_aluno?: boolean
    id_disciplina?: boolean
    in_ano?: boolean
    in_semestre?: boolean
    in_faltas?: boolean
    nm_nota1?: boolean
    nm_nota2?: boolean
    nm_nota3?: boolean
    bl_aprovado?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursa"]>

  export type CursaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cursa?: boolean
    id_aluno?: boolean
    id_disciplina?: boolean
    in_ano?: boolean
    in_semestre?: boolean
    in_faltas?: boolean
    nm_nota1?: boolean
    nm_nota2?: boolean
    nm_nota3?: boolean
    bl_aprovado?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursa"]>

  export type CursaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cursa?: boolean
    id_aluno?: boolean
    id_disciplina?: boolean
    in_ano?: boolean
    in_semestre?: boolean
    in_faltas?: boolean
    nm_nota1?: boolean
    nm_nota2?: boolean
    nm_nota3?: boolean
    bl_aprovado?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursa"]>

  export type CursaSelectScalar = {
    id_cursa?: boolean
    id_aluno?: boolean
    id_disciplina?: boolean
    in_ano?: boolean
    in_semestre?: boolean
    in_faltas?: boolean
    nm_nota1?: boolean
    nm_nota2?: boolean
    nm_nota3?: boolean
    bl_aprovado?: boolean
  }

  export type CursaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cursa" | "id_aluno" | "id_disciplina" | "in_ano" | "in_semestre" | "in_faltas" | "nm_nota1" | "nm_nota2" | "nm_nota3" | "bl_aprovado", ExtArgs["result"]["cursa"]>
  export type CursaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type CursaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }
  export type CursaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }

  export type $CursaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cursa"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
      disciplina: Prisma.$DisciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cursa: number
      id_aluno: number
      id_disciplina: number
      in_ano: number
      in_semestre: number
      in_faltas: number
      nm_nota1: Prisma.Decimal
      nm_nota2: Prisma.Decimal
      nm_nota3: Prisma.Decimal
      bl_aprovado: boolean
    }, ExtArgs["result"]["cursa"]>
    composites: {}
  }

  type CursaGetPayload<S extends boolean | null | undefined | CursaDefaultArgs> = $Result.GetResult<Prisma.$CursaPayload, S>

  type CursaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CursaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursaCountAggregateInputType | true
    }

  export interface CursaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cursa'], meta: { name: 'Cursa' } }
    /**
     * Find zero or one Cursa that matches the filter.
     * @param {CursaFindUniqueArgs} args - Arguments to find a Cursa
     * @example
     * // Get one Cursa
     * const cursa = await prisma.cursa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursaFindUniqueArgs>(args: SelectSubset<T, CursaFindUniqueArgs<ExtArgs>>): Prisma__CursaClient<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cursa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CursaFindUniqueOrThrowArgs} args - Arguments to find a Cursa
     * @example
     * // Get one Cursa
     * const cursa = await prisma.cursa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursaFindUniqueOrThrowArgs>(args: SelectSubset<T, CursaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursaClient<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursaFindFirstArgs} args - Arguments to find a Cursa
     * @example
     * // Get one Cursa
     * const cursa = await prisma.cursa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursaFindFirstArgs>(args?: SelectSubset<T, CursaFindFirstArgs<ExtArgs>>): Prisma__CursaClient<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursaFindFirstOrThrowArgs} args - Arguments to find a Cursa
     * @example
     * // Get one Cursa
     * const cursa = await prisma.cursa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursaFindFirstOrThrowArgs>(args?: SelectSubset<T, CursaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursaClient<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursas
     * const cursas = await prisma.cursa.findMany()
     * 
     * // Get first 10 Cursas
     * const cursas = await prisma.cursa.findMany({ take: 10 })
     * 
     * // Only select the `id_cursa`
     * const cursaWithId_cursaOnly = await prisma.cursa.findMany({ select: { id_cursa: true } })
     * 
     */
    findMany<T extends CursaFindManyArgs>(args?: SelectSubset<T, CursaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cursa.
     * @param {CursaCreateArgs} args - Arguments to create a Cursa.
     * @example
     * // Create one Cursa
     * const Cursa = await prisma.cursa.create({
     *   data: {
     *     // ... data to create a Cursa
     *   }
     * })
     * 
     */
    create<T extends CursaCreateArgs>(args: SelectSubset<T, CursaCreateArgs<ExtArgs>>): Prisma__CursaClient<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursas.
     * @param {CursaCreateManyArgs} args - Arguments to create many Cursas.
     * @example
     * // Create many Cursas
     * const cursa = await prisma.cursa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursaCreateManyArgs>(args?: SelectSubset<T, CursaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursas and returns the data saved in the database.
     * @param {CursaCreateManyAndReturnArgs} args - Arguments to create many Cursas.
     * @example
     * // Create many Cursas
     * const cursa = await prisma.cursa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursas and only return the `id_cursa`
     * const cursaWithId_cursaOnly = await prisma.cursa.createManyAndReturn({
     *   select: { id_cursa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursaCreateManyAndReturnArgs>(args?: SelectSubset<T, CursaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cursa.
     * @param {CursaDeleteArgs} args - Arguments to delete one Cursa.
     * @example
     * // Delete one Cursa
     * const Cursa = await prisma.cursa.delete({
     *   where: {
     *     // ... filter to delete one Cursa
     *   }
     * })
     * 
     */
    delete<T extends CursaDeleteArgs>(args: SelectSubset<T, CursaDeleteArgs<ExtArgs>>): Prisma__CursaClient<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cursa.
     * @param {CursaUpdateArgs} args - Arguments to update one Cursa.
     * @example
     * // Update one Cursa
     * const cursa = await prisma.cursa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursaUpdateArgs>(args: SelectSubset<T, CursaUpdateArgs<ExtArgs>>): Prisma__CursaClient<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursas.
     * @param {CursaDeleteManyArgs} args - Arguments to filter Cursas to delete.
     * @example
     * // Delete a few Cursas
     * const { count } = await prisma.cursa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursaDeleteManyArgs>(args?: SelectSubset<T, CursaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursas
     * const cursa = await prisma.cursa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursaUpdateManyArgs>(args: SelectSubset<T, CursaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursas and returns the data updated in the database.
     * @param {CursaUpdateManyAndReturnArgs} args - Arguments to update many Cursas.
     * @example
     * // Update many Cursas
     * const cursa = await prisma.cursa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cursas and only return the `id_cursa`
     * const cursaWithId_cursaOnly = await prisma.cursa.updateManyAndReturn({
     *   select: { id_cursa: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CursaUpdateManyAndReturnArgs>(args: SelectSubset<T, CursaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cursa.
     * @param {CursaUpsertArgs} args - Arguments to update or create a Cursa.
     * @example
     * // Update or create a Cursa
     * const cursa = await prisma.cursa.upsert({
     *   create: {
     *     // ... data to create a Cursa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursa we want to update
     *   }
     * })
     */
    upsert<T extends CursaUpsertArgs>(args: SelectSubset<T, CursaUpsertArgs<ExtArgs>>): Prisma__CursaClient<$Result.GetResult<Prisma.$CursaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursaCountArgs} args - Arguments to filter Cursas to count.
     * @example
     * // Count the number of Cursas
     * const count = await prisma.cursa.count({
     *   where: {
     *     // ... the filter for the Cursas we want to count
     *   }
     * })
    **/
    count<T extends CursaCountArgs>(
      args?: Subset<T, CursaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CursaAggregateArgs>(args: Subset<T, CursaAggregateArgs>): Prisma.PrismaPromise<GetCursaAggregateType<T>>

    /**
     * Group by Cursa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursaGroupByArgs} args - Group by arguments.
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
      T extends CursaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursaGroupByArgs['orderBy'] }
        : { orderBy?: CursaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CursaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cursa model
   */
  readonly fields: CursaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cursa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cursa model
   */
  interface CursaFieldRefs {
    readonly id_cursa: FieldRef<"Cursa", 'Int'>
    readonly id_aluno: FieldRef<"Cursa", 'Int'>
    readonly id_disciplina: FieldRef<"Cursa", 'Int'>
    readonly in_ano: FieldRef<"Cursa", 'Int'>
    readonly in_semestre: FieldRef<"Cursa", 'Int'>
    readonly in_faltas: FieldRef<"Cursa", 'Int'>
    readonly nm_nota1: FieldRef<"Cursa", 'Decimal'>
    readonly nm_nota2: FieldRef<"Cursa", 'Decimal'>
    readonly nm_nota3: FieldRef<"Cursa", 'Decimal'>
    readonly bl_aprovado: FieldRef<"Cursa", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Cursa findUnique
   */
  export type CursaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * Filter, which Cursa to fetch.
     */
    where: CursaWhereUniqueInput
  }

  /**
   * Cursa findUniqueOrThrow
   */
  export type CursaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * Filter, which Cursa to fetch.
     */
    where: CursaWhereUniqueInput
  }

  /**
   * Cursa findFirst
   */
  export type CursaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * Filter, which Cursa to fetch.
     */
    where?: CursaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursas to fetch.
     */
    orderBy?: CursaOrderByWithRelationInput | CursaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursas.
     */
    cursor?: CursaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursas.
     */
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * Cursa findFirstOrThrow
   */
  export type CursaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * Filter, which Cursa to fetch.
     */
    where?: CursaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursas to fetch.
     */
    orderBy?: CursaOrderByWithRelationInput | CursaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursas.
     */
    cursor?: CursaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursas.
     */
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * Cursa findMany
   */
  export type CursaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * Filter, which Cursas to fetch.
     */
    where?: CursaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursas to fetch.
     */
    orderBy?: CursaOrderByWithRelationInput | CursaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursas.
     */
    cursor?: CursaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursas.
     */
    skip?: number
    distinct?: CursaScalarFieldEnum | CursaScalarFieldEnum[]
  }

  /**
   * Cursa create
   */
  export type CursaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cursa.
     */
    data: XOR<CursaCreateInput, CursaUncheckedCreateInput>
  }

  /**
   * Cursa createMany
   */
  export type CursaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursas.
     */
    data: CursaCreateManyInput | CursaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cursa createManyAndReturn
   */
  export type CursaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * The data used to create many Cursas.
     */
    data: CursaCreateManyInput | CursaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cursa update
   */
  export type CursaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cursa.
     */
    data: XOR<CursaUpdateInput, CursaUncheckedUpdateInput>
    /**
     * Choose, which Cursa to update.
     */
    where: CursaWhereUniqueInput
  }

  /**
   * Cursa updateMany
   */
  export type CursaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursas.
     */
    data: XOR<CursaUpdateManyMutationInput, CursaUncheckedUpdateManyInput>
    /**
     * Filter which Cursas to update
     */
    where?: CursaWhereInput
    /**
     * Limit how many Cursas to update.
     */
    limit?: number
  }

  /**
   * Cursa updateManyAndReturn
   */
  export type CursaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * The data used to update Cursas.
     */
    data: XOR<CursaUpdateManyMutationInput, CursaUncheckedUpdateManyInput>
    /**
     * Filter which Cursas to update
     */
    where?: CursaWhereInput
    /**
     * Limit how many Cursas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cursa upsert
   */
  export type CursaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cursa to update in case it exists.
     */
    where: CursaWhereUniqueInput
    /**
     * In case the Cursa found by the `where` argument doesn't exist, create a new Cursa with this data.
     */
    create: XOR<CursaCreateInput, CursaUncheckedCreateInput>
    /**
     * In case the Cursa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursaUpdateInput, CursaUncheckedUpdateInput>
  }

  /**
   * Cursa delete
   */
  export type CursaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
    /**
     * Filter which Cursa to delete.
     */
    where: CursaWhereUniqueInput
  }

  /**
   * Cursa deleteMany
   */
  export type CursaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursas to delete
     */
    where?: CursaWhereInput
    /**
     * Limit how many Cursas to delete.
     */
    limit?: number
  }

  /**
   * Cursa without action
   */
  export type CursaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cursa
     */
    select?: CursaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cursa
     */
    omit?: CursaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursaInclude<ExtArgs> | null
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


  export const TituloScalarFieldEnum: {
    id_titulo: 'id_titulo',
    tx_descricao: 'tx_descricao'
  };

  export type TituloScalarFieldEnum = (typeof TituloScalarFieldEnum)[keyof typeof TituloScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    id_professor: 'id_professor',
    id_titulo: 'id_titulo',
    tx_nome: 'tx_nome',
    tx_sexo: 'tx_sexo',
    tx_estado_civil: 'tx_estado_civil',
    dt_nascimento: 'dt_nascimento',
    tx_telefone: 'tx_telefone'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const InstituicaoScalarFieldEnum: {
    id_instituicao: 'id_instituicao',
    tx_sigla: 'tx_sigla',
    tx_descricao: 'tx_descricao'
  };

  export type InstituicaoScalarFieldEnum = (typeof InstituicaoScalarFieldEnum)[keyof typeof InstituicaoScalarFieldEnum]


  export const TipoCursoScalarFieldEnum: {
    id_tipo_curso: 'id_tipo_curso',
    tx_descricao: 'tx_descricao'
  };

  export type TipoCursoScalarFieldEnum = (typeof TipoCursoScalarFieldEnum)[keyof typeof TipoCursoScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id_curso: 'id_curso',
    id_instituicao: 'id_instituicao',
    id_tipo_curso: 'id_tipo_curso',
    tx_descricao: 'tx_descricao'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const TipoDisciplinaScalarFieldEnum: {
    id_tipo_disciplina: 'id_tipo_disciplina',
    tx_descricao: 'tx_descricao'
  };

  export type TipoDisciplinaScalarFieldEnum = (typeof TipoDisciplinaScalarFieldEnum)[keyof typeof TipoDisciplinaScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    id_disciplina: 'id_disciplina',
    id_curso: 'id_curso',
    id_tipo_disciplina: 'id_tipo_disciplina',
    tx_sigla: 'tx_sigla',
    tx_descricao: 'tx_descricao',
    in_periodo: 'in_periodo',
    in_carga_horaria: 'in_carga_horaria'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const LecionaScalarFieldEnum: {
    id_leciona: 'id_leciona',
    id_professor: 'id_professor',
    id_disciplina: 'id_disciplina'
  };

  export type LecionaScalarFieldEnum = (typeof LecionaScalarFieldEnum)[keyof typeof LecionaScalarFieldEnum]


  export const AlunoScalarFieldEnum: {
    id_aluno: 'id_aluno',
    tx_nome: 'tx_nome',
    tx_sexo: 'tx_sexo',
    dt_nascimento: 'dt_nascimento'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const CursaScalarFieldEnum: {
    id_cursa: 'id_cursa',
    id_aluno: 'id_aluno',
    id_disciplina: 'id_disciplina',
    in_ano: 'in_ano',
    in_semestre: 'in_semestre',
    in_faltas: 'in_faltas',
    nm_nota1: 'nm_nota1',
    nm_nota2: 'nm_nota2',
    nm_nota3: 'nm_nota3',
    bl_aprovado: 'bl_aprovado'
  };

  export type CursaScalarFieldEnum = (typeof CursaScalarFieldEnum)[keyof typeof CursaScalarFieldEnum]


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
   * Reference to a field of type 'Sexo'
   */
  export type EnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo'>
    


  /**
   * Reference to a field of type 'Sexo[]'
   */
  export type ListEnumSexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexo[]'>
    


  /**
   * Reference to a field of type 'EstadoCivil'
   */
  export type EnumEstadoCivilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCivil'>
    


  /**
   * Reference to a field of type 'EstadoCivil[]'
   */
  export type ListEnumEstadoCivilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCivil[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type TituloWhereInput = {
    AND?: TituloWhereInput | TituloWhereInput[]
    OR?: TituloWhereInput[]
    NOT?: TituloWhereInput | TituloWhereInput[]
    id_titulo?: IntFilter<"Titulo"> | number
    tx_descricao?: StringFilter<"Titulo"> | string
    professores?: ProfessorListRelationFilter
  }

  export type TituloOrderByWithRelationInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
    professores?: ProfessorOrderByRelationAggregateInput
  }

  export type TituloWhereUniqueInput = Prisma.AtLeast<{
    id_titulo?: number
    AND?: TituloWhereInput | TituloWhereInput[]
    OR?: TituloWhereInput[]
    NOT?: TituloWhereInput | TituloWhereInput[]
    tx_descricao?: StringFilter<"Titulo"> | string
    professores?: ProfessorListRelationFilter
  }, "id_titulo">

  export type TituloOrderByWithAggregationInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
    _count?: TituloCountOrderByAggregateInput
    _avg?: TituloAvgOrderByAggregateInput
    _max?: TituloMaxOrderByAggregateInput
    _min?: TituloMinOrderByAggregateInput
    _sum?: TituloSumOrderByAggregateInput
  }

  export type TituloScalarWhereWithAggregatesInput = {
    AND?: TituloScalarWhereWithAggregatesInput | TituloScalarWhereWithAggregatesInput[]
    OR?: TituloScalarWhereWithAggregatesInput[]
    NOT?: TituloScalarWhereWithAggregatesInput | TituloScalarWhereWithAggregatesInput[]
    id_titulo?: IntWithAggregatesFilter<"Titulo"> | number
    tx_descricao?: StringWithAggregatesFilter<"Titulo"> | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id_professor?: IntFilter<"Professor"> | number
    id_titulo?: IntFilter<"Professor"> | number
    tx_nome?: StringFilter<"Professor"> | string
    tx_sexo?: EnumSexoFilter<"Professor"> | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFilter<"Professor"> | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFilter<"Professor"> | Date | string
    tx_telefone?: StringFilter<"Professor"> | string
    titulo?: XOR<TituloScalarRelationFilter, TituloWhereInput>
    leciona?: LecionaListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
    titulo?: TituloOrderByWithRelationInput
    leciona?: LecionaOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    id_professor?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    id_titulo?: IntFilter<"Professor"> | number
    tx_nome?: StringFilter<"Professor"> | string
    tx_sexo?: EnumSexoFilter<"Professor"> | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFilter<"Professor"> | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFilter<"Professor"> | Date | string
    tx_telefone?: StringFilter<"Professor"> | string
    titulo?: XOR<TituloScalarRelationFilter, TituloWhereInput>
    leciona?: LecionaListRelationFilter
  }, "id_professor">

  export type ProfessorOrderByWithAggregationInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    id_professor?: IntWithAggregatesFilter<"Professor"> | number
    id_titulo?: IntWithAggregatesFilter<"Professor"> | number
    tx_nome?: StringWithAggregatesFilter<"Professor"> | string
    tx_sexo?: EnumSexoWithAggregatesFilter<"Professor"> | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilWithAggregatesFilter<"Professor"> | $Enums.EstadoCivil
    dt_nascimento?: DateTimeWithAggregatesFilter<"Professor"> | Date | string
    tx_telefone?: StringWithAggregatesFilter<"Professor"> | string
  }

  export type InstituicaoWhereInput = {
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    id_instituicao?: IntFilter<"Instituicao"> | number
    tx_sigla?: StringFilter<"Instituicao"> | string
    tx_descricao?: StringFilter<"Instituicao"> | string
    cursos?: CursoListRelationFilter
  }

  export type InstituicaoOrderByWithRelationInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    cursos?: CursoOrderByRelationAggregateInput
  }

  export type InstituicaoWhereUniqueInput = Prisma.AtLeast<{
    id_instituicao?: number
    AND?: InstituicaoWhereInput | InstituicaoWhereInput[]
    OR?: InstituicaoWhereInput[]
    NOT?: InstituicaoWhereInput | InstituicaoWhereInput[]
    tx_sigla?: StringFilter<"Instituicao"> | string
    tx_descricao?: StringFilter<"Instituicao"> | string
    cursos?: CursoListRelationFilter
  }, "id_instituicao">

  export type InstituicaoOrderByWithAggregationInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    _count?: InstituicaoCountOrderByAggregateInput
    _avg?: InstituicaoAvgOrderByAggregateInput
    _max?: InstituicaoMaxOrderByAggregateInput
    _min?: InstituicaoMinOrderByAggregateInput
    _sum?: InstituicaoSumOrderByAggregateInput
  }

  export type InstituicaoScalarWhereWithAggregatesInput = {
    AND?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    OR?: InstituicaoScalarWhereWithAggregatesInput[]
    NOT?: InstituicaoScalarWhereWithAggregatesInput | InstituicaoScalarWhereWithAggregatesInput[]
    id_instituicao?: IntWithAggregatesFilter<"Instituicao"> | number
    tx_sigla?: StringWithAggregatesFilter<"Instituicao"> | string
    tx_descricao?: StringWithAggregatesFilter<"Instituicao"> | string
  }

  export type TipoCursoWhereInput = {
    AND?: TipoCursoWhereInput | TipoCursoWhereInput[]
    OR?: TipoCursoWhereInput[]
    NOT?: TipoCursoWhereInput | TipoCursoWhereInput[]
    id_tipo_curso?: IntFilter<"TipoCurso"> | number
    tx_descricao?: StringFilter<"TipoCurso"> | string
    cursos?: CursoListRelationFilter
  }

  export type TipoCursoOrderByWithRelationInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
    cursos?: CursoOrderByRelationAggregateInput
  }

  export type TipoCursoWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_curso?: number
    AND?: TipoCursoWhereInput | TipoCursoWhereInput[]
    OR?: TipoCursoWhereInput[]
    NOT?: TipoCursoWhereInput | TipoCursoWhereInput[]
    tx_descricao?: StringFilter<"TipoCurso"> | string
    cursos?: CursoListRelationFilter
  }, "id_tipo_curso">

  export type TipoCursoOrderByWithAggregationInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
    _count?: TipoCursoCountOrderByAggregateInput
    _avg?: TipoCursoAvgOrderByAggregateInput
    _max?: TipoCursoMaxOrderByAggregateInput
    _min?: TipoCursoMinOrderByAggregateInput
    _sum?: TipoCursoSumOrderByAggregateInput
  }

  export type TipoCursoScalarWhereWithAggregatesInput = {
    AND?: TipoCursoScalarWhereWithAggregatesInput | TipoCursoScalarWhereWithAggregatesInput[]
    OR?: TipoCursoScalarWhereWithAggregatesInput[]
    NOT?: TipoCursoScalarWhereWithAggregatesInput | TipoCursoScalarWhereWithAggregatesInput[]
    id_tipo_curso?: IntWithAggregatesFilter<"TipoCurso"> | number
    tx_descricao?: StringWithAggregatesFilter<"TipoCurso"> | string
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id_curso?: IntFilter<"Curso"> | number
    id_instituicao?: IntFilter<"Curso"> | number
    id_tipo_curso?: IntFilter<"Curso"> | number
    tx_descricao?: StringFilter<"Curso"> | string
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    tipoCurso?: XOR<TipoCursoScalarRelationFilter, TipoCursoWhereInput>
    disciplinas?: DisciplinaListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
    instituicao?: InstituicaoOrderByWithRelationInput
    tipoCurso?: TipoCursoOrderByWithRelationInput
    disciplinas?: DisciplinaOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id_curso?: number
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id_instituicao?: IntFilter<"Curso"> | number
    id_tipo_curso?: IntFilter<"Curso"> | number
    tx_descricao?: StringFilter<"Curso"> | string
    instituicao?: XOR<InstituicaoScalarRelationFilter, InstituicaoWhereInput>
    tipoCurso?: XOR<TipoCursoScalarRelationFilter, TipoCursoWhereInput>
    disciplinas?: DisciplinaListRelationFilter
  }, "id_curso">

  export type CursoOrderByWithAggregationInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id_curso?: IntWithAggregatesFilter<"Curso"> | number
    id_instituicao?: IntWithAggregatesFilter<"Curso"> | number
    id_tipo_curso?: IntWithAggregatesFilter<"Curso"> | number
    tx_descricao?: StringWithAggregatesFilter<"Curso"> | string
  }

  export type TipoDisciplinaWhereInput = {
    AND?: TipoDisciplinaWhereInput | TipoDisciplinaWhereInput[]
    OR?: TipoDisciplinaWhereInput[]
    NOT?: TipoDisciplinaWhereInput | TipoDisciplinaWhereInput[]
    id_tipo_disciplina?: IntFilter<"TipoDisciplina"> | number
    tx_descricao?: StringFilter<"TipoDisciplina"> | string
    disciplinas?: DisciplinaListRelationFilter
  }

  export type TipoDisciplinaOrderByWithRelationInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
    disciplinas?: DisciplinaOrderByRelationAggregateInput
  }

  export type TipoDisciplinaWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_disciplina?: number
    AND?: TipoDisciplinaWhereInput | TipoDisciplinaWhereInput[]
    OR?: TipoDisciplinaWhereInput[]
    NOT?: TipoDisciplinaWhereInput | TipoDisciplinaWhereInput[]
    tx_descricao?: StringFilter<"TipoDisciplina"> | string
    disciplinas?: DisciplinaListRelationFilter
  }, "id_tipo_disciplina">

  export type TipoDisciplinaOrderByWithAggregationInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
    _count?: TipoDisciplinaCountOrderByAggregateInput
    _avg?: TipoDisciplinaAvgOrderByAggregateInput
    _max?: TipoDisciplinaMaxOrderByAggregateInput
    _min?: TipoDisciplinaMinOrderByAggregateInput
    _sum?: TipoDisciplinaSumOrderByAggregateInput
  }

  export type TipoDisciplinaScalarWhereWithAggregatesInput = {
    AND?: TipoDisciplinaScalarWhereWithAggregatesInput | TipoDisciplinaScalarWhereWithAggregatesInput[]
    OR?: TipoDisciplinaScalarWhereWithAggregatesInput[]
    NOT?: TipoDisciplinaScalarWhereWithAggregatesInput | TipoDisciplinaScalarWhereWithAggregatesInput[]
    id_tipo_disciplina?: IntWithAggregatesFilter<"TipoDisciplina"> | number
    tx_descricao?: StringWithAggregatesFilter<"TipoDisciplina"> | string
  }

  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    id_disciplina?: IntFilter<"Disciplina"> | number
    id_curso?: IntFilter<"Disciplina"> | number
    id_tipo_disciplina?: IntFilter<"Disciplina"> | number
    tx_sigla?: StringFilter<"Disciplina"> | string
    tx_descricao?: StringFilter<"Disciplina"> | string
    in_periodo?: IntFilter<"Disciplina"> | number
    in_carga_horaria?: IntFilter<"Disciplina"> | number
    tipoDisciplina?: XOR<TipoDisciplinaScalarRelationFilter, TipoDisciplinaWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    leciona?: LecionaListRelationFilter
    cursa?: CursaListRelationFilter
  }

  export type DisciplinaOrderByWithRelationInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
    tipoDisciplina?: TipoDisciplinaOrderByWithRelationInput
    curso?: CursoOrderByWithRelationInput
    leciona?: LecionaOrderByRelationAggregateInput
    cursa?: CursaOrderByRelationAggregateInput
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    id_disciplina?: number
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    id_curso?: IntFilter<"Disciplina"> | number
    id_tipo_disciplina?: IntFilter<"Disciplina"> | number
    tx_sigla?: StringFilter<"Disciplina"> | string
    tx_descricao?: StringFilter<"Disciplina"> | string
    in_periodo?: IntFilter<"Disciplina"> | number
    in_carga_horaria?: IntFilter<"Disciplina"> | number
    tipoDisciplina?: XOR<TipoDisciplinaScalarRelationFilter, TipoDisciplinaWhereInput>
    curso?: XOR<CursoScalarRelationFilter, CursoWhereInput>
    leciona?: LecionaListRelationFilter
    cursa?: CursaListRelationFilter
  }, "id_disciplina">

  export type DisciplinaOrderByWithAggregationInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
    _count?: DisciplinaCountOrderByAggregateInput
    _avg?: DisciplinaAvgOrderByAggregateInput
    _max?: DisciplinaMaxOrderByAggregateInput
    _min?: DisciplinaMinOrderByAggregateInput
    _sum?: DisciplinaSumOrderByAggregateInput
  }

  export type DisciplinaScalarWhereWithAggregatesInput = {
    AND?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    OR?: DisciplinaScalarWhereWithAggregatesInput[]
    NOT?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    id_disciplina?: IntWithAggregatesFilter<"Disciplina"> | number
    id_curso?: IntWithAggregatesFilter<"Disciplina"> | number
    id_tipo_disciplina?: IntWithAggregatesFilter<"Disciplina"> | number
    tx_sigla?: StringWithAggregatesFilter<"Disciplina"> | string
    tx_descricao?: StringWithAggregatesFilter<"Disciplina"> | string
    in_periodo?: IntWithAggregatesFilter<"Disciplina"> | number
    in_carga_horaria?: IntWithAggregatesFilter<"Disciplina"> | number
  }

  export type LecionaWhereInput = {
    AND?: LecionaWhereInput | LecionaWhereInput[]
    OR?: LecionaWhereInput[]
    NOT?: LecionaWhereInput | LecionaWhereInput[]
    id_leciona?: IntFilter<"Leciona"> | number
    id_professor?: IntFilter<"Leciona"> | number
    id_disciplina?: IntFilter<"Leciona"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }

  export type LecionaOrderByWithRelationInput = {
    id_leciona?: SortOrder
    id_professor?: SortOrder
    id_disciplina?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    disciplina?: DisciplinaOrderByWithRelationInput
  }

  export type LecionaWhereUniqueInput = Prisma.AtLeast<{
    id_leciona?: number
    AND?: LecionaWhereInput | LecionaWhereInput[]
    OR?: LecionaWhereInput[]
    NOT?: LecionaWhereInput | LecionaWhereInput[]
    id_professor?: IntFilter<"Leciona"> | number
    id_disciplina?: IntFilter<"Leciona"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }, "id_leciona">

  export type LecionaOrderByWithAggregationInput = {
    id_leciona?: SortOrder
    id_professor?: SortOrder
    id_disciplina?: SortOrder
    _count?: LecionaCountOrderByAggregateInput
    _avg?: LecionaAvgOrderByAggregateInput
    _max?: LecionaMaxOrderByAggregateInput
    _min?: LecionaMinOrderByAggregateInput
    _sum?: LecionaSumOrderByAggregateInput
  }

  export type LecionaScalarWhereWithAggregatesInput = {
    AND?: LecionaScalarWhereWithAggregatesInput | LecionaScalarWhereWithAggregatesInput[]
    OR?: LecionaScalarWhereWithAggregatesInput[]
    NOT?: LecionaScalarWhereWithAggregatesInput | LecionaScalarWhereWithAggregatesInput[]
    id_leciona?: IntWithAggregatesFilter<"Leciona"> | number
    id_professor?: IntWithAggregatesFilter<"Leciona"> | number
    id_disciplina?: IntWithAggregatesFilter<"Leciona"> | number
  }

  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    id_aluno?: IntFilter<"Aluno"> | number
    tx_nome?: StringFilter<"Aluno"> | string
    tx_sexo?: EnumSexoFilter<"Aluno"> | $Enums.Sexo
    dt_nascimento?: DateTimeFilter<"Aluno"> | Date | string
    Cursa?: CursaListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
    Cursa?: CursaOrderByRelationAggregateInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    id_aluno?: number
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    tx_nome?: StringFilter<"Aluno"> | string
    tx_sexo?: EnumSexoFilter<"Aluno"> | $Enums.Sexo
    dt_nascimento?: DateTimeFilter<"Aluno"> | Date | string
    Cursa?: CursaListRelationFilter
  }, "id_aluno">

  export type AlunoOrderByWithAggregationInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _avg?: AlunoAvgOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
    _sum?: AlunoSumOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    id_aluno?: IntWithAggregatesFilter<"Aluno"> | number
    tx_nome?: StringWithAggregatesFilter<"Aluno"> | string
    tx_sexo?: EnumSexoWithAggregatesFilter<"Aluno"> | $Enums.Sexo
    dt_nascimento?: DateTimeWithAggregatesFilter<"Aluno"> | Date | string
  }

  export type CursaWhereInput = {
    AND?: CursaWhereInput | CursaWhereInput[]
    OR?: CursaWhereInput[]
    NOT?: CursaWhereInput | CursaWhereInput[]
    id_cursa?: IntFilter<"Cursa"> | number
    id_aluno?: IntFilter<"Cursa"> | number
    id_disciplina?: IntFilter<"Cursa"> | number
    in_ano?: IntFilter<"Cursa"> | number
    in_semestre?: IntFilter<"Cursa"> | number
    in_faltas?: IntFilter<"Cursa"> | number
    nm_nota1?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFilter<"Cursa"> | boolean
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }

  export type CursaOrderByWithRelationInput = {
    id_cursa?: SortOrder
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nm_nota1?: SortOrder
    nm_nota2?: SortOrder
    nm_nota3?: SortOrder
    bl_aprovado?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
    disciplina?: DisciplinaOrderByWithRelationInput
  }

  export type CursaWhereUniqueInput = Prisma.AtLeast<{
    id_cursa?: number
    id_aluno_id_disciplina_in_ano_in_semestre?: CursaId_alunoId_disciplinaIn_anoIn_semestreCompoundUniqueInput
    AND?: CursaWhereInput | CursaWhereInput[]
    OR?: CursaWhereInput[]
    NOT?: CursaWhereInput | CursaWhereInput[]
    id_aluno?: IntFilter<"Cursa"> | number
    id_disciplina?: IntFilter<"Cursa"> | number
    in_ano?: IntFilter<"Cursa"> | number
    in_semestre?: IntFilter<"Cursa"> | number
    in_faltas?: IntFilter<"Cursa"> | number
    nm_nota1?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFilter<"Cursa"> | boolean
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }, "id_cursa" | "id_aluno_id_disciplina_in_ano_in_semestre">

  export type CursaOrderByWithAggregationInput = {
    id_cursa?: SortOrder
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nm_nota1?: SortOrder
    nm_nota2?: SortOrder
    nm_nota3?: SortOrder
    bl_aprovado?: SortOrder
    _count?: CursaCountOrderByAggregateInput
    _avg?: CursaAvgOrderByAggregateInput
    _max?: CursaMaxOrderByAggregateInput
    _min?: CursaMinOrderByAggregateInput
    _sum?: CursaSumOrderByAggregateInput
  }

  export type CursaScalarWhereWithAggregatesInput = {
    AND?: CursaScalarWhereWithAggregatesInput | CursaScalarWhereWithAggregatesInput[]
    OR?: CursaScalarWhereWithAggregatesInput[]
    NOT?: CursaScalarWhereWithAggregatesInput | CursaScalarWhereWithAggregatesInput[]
    id_cursa?: IntWithAggregatesFilter<"Cursa"> | number
    id_aluno?: IntWithAggregatesFilter<"Cursa"> | number
    id_disciplina?: IntWithAggregatesFilter<"Cursa"> | number
    in_ano?: IntWithAggregatesFilter<"Cursa"> | number
    in_semestre?: IntWithAggregatesFilter<"Cursa"> | number
    in_faltas?: IntWithAggregatesFilter<"Cursa"> | number
    nm_nota1?: DecimalWithAggregatesFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalWithAggregatesFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalWithAggregatesFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolWithAggregatesFilter<"Cursa"> | boolean
  }

  export type TituloCreateInput = {
    tx_descricao: string
    professores?: ProfessorCreateNestedManyWithoutTituloInput
  }

  export type TituloUncheckedCreateInput = {
    id_titulo?: number
    tx_descricao: string
    professores?: ProfessorUncheckedCreateNestedManyWithoutTituloInput
  }

  export type TituloUpdateInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    professores?: ProfessorUpdateManyWithoutTituloNestedInput
  }

  export type TituloUncheckedUpdateInput = {
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    professores?: ProfessorUncheckedUpdateManyWithoutTituloNestedInput
  }

  export type TituloCreateManyInput = {
    id_titulo?: number
    tx_descricao: string
  }

  export type TituloUpdateManyMutationInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TituloUncheckedUpdateManyInput = {
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCreateInput = {
    tx_nome: string
    tx_sexo?: $Enums.Sexo
    tx_estado_civil?: $Enums.EstadoCivil
    dt_nascimento: Date | string
    tx_telefone: string
    titulo: TituloCreateNestedOneWithoutProfessoresInput
    leciona?: LecionaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    id_professor?: number
    id_titulo: number
    tx_nome: string
    tx_sexo?: $Enums.Sexo
    tx_estado_civil?: $Enums.EstadoCivil
    dt_nascimento: Date | string
    tx_telefone: string
    leciona?: LecionaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    titulo?: TituloUpdateOneRequiredWithoutProfessoresNestedInput
    leciona?: LecionaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    leciona?: LecionaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    id_professor?: number
    id_titulo: number
    tx_nome: string
    tx_sexo?: $Enums.Sexo
    tx_estado_civil?: $Enums.EstadoCivil
    dt_nascimento: Date | string
    tx_telefone: string
  }

  export type ProfessorUpdateManyMutationInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorUncheckedUpdateManyInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoCreateInput = {
    tx_sigla: string
    tx_descricao: string
    cursos?: CursoCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUncheckedCreateInput = {
    id_instituicao?: number
    tx_sigla: string
    tx_descricao: string
    cursos?: CursoUncheckedCreateNestedManyWithoutInstituicaoInput
  }

  export type InstituicaoUpdateInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoUncheckedUpdateInput = {
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUncheckedUpdateManyWithoutInstituicaoNestedInput
  }

  export type InstituicaoCreateManyInput = {
    id_instituicao?: number
    tx_sigla: string
    tx_descricao: string
  }

  export type InstituicaoUpdateManyMutationInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoUncheckedUpdateManyInput = {
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoCursoCreateInput = {
    tx_descricao: string
    cursos?: CursoCreateNestedManyWithoutTipoCursoInput
  }

  export type TipoCursoUncheckedCreateInput = {
    id_tipo_curso?: number
    tx_descricao: string
    cursos?: CursoUncheckedCreateNestedManyWithoutTipoCursoInput
  }

  export type TipoCursoUpdateInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUpdateManyWithoutTipoCursoNestedInput
  }

  export type TipoCursoUncheckedUpdateInput = {
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUncheckedUpdateManyWithoutTipoCursoNestedInput
  }

  export type TipoCursoCreateManyInput = {
    id_tipo_curso?: number
    tx_descricao: string
  }

  export type TipoCursoUpdateManyMutationInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoCursoUncheckedUpdateManyInput = {
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateInput = {
    tx_descricao: string
    instituicao: InstituicaoCreateNestedOneWithoutCursosInput
    tipoCurso: TipoCursoCreateNestedOneWithoutCursosInput
    disciplinas?: DisciplinaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id_curso?: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
    disciplinas?: DisciplinaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    instituicao?: InstituicaoUpdateOneRequiredWithoutCursosNestedInput
    tipoCurso?: TipoCursoUpdateOneRequiredWithoutCursosNestedInput
    disciplinas?: DisciplinaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplinas?: DisciplinaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id_curso?: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
  }

  export type CursoUpdateManyMutationInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUncheckedUpdateManyInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoDisciplinaCreateInput = {
    tx_descricao: string
    disciplinas?: DisciplinaCreateNestedManyWithoutTipoDisciplinaInput
  }

  export type TipoDisciplinaUncheckedCreateInput = {
    id_tipo_disciplina?: number
    tx_descricao: string
    disciplinas?: DisciplinaUncheckedCreateNestedManyWithoutTipoDisciplinaInput
  }

  export type TipoDisciplinaUpdateInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplinas?: DisciplinaUpdateManyWithoutTipoDisciplinaNestedInput
  }

  export type TipoDisciplinaUncheckedUpdateInput = {
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplinas?: DisciplinaUncheckedUpdateManyWithoutTipoDisciplinaNestedInput
  }

  export type TipoDisciplinaCreateManyInput = {
    id_tipo_disciplina?: number
    tx_descricao: string
  }

  export type TipoDisciplinaUpdateManyMutationInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoDisciplinaUncheckedUpdateManyInput = {
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaCreateInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    tipoDisciplina: TipoDisciplinaCreateNestedOneWithoutDisciplinasInput
    curso: CursoCreateNestedOneWithoutDisciplinasInput
    leciona?: LecionaCreateNestedManyWithoutDisciplinaInput
    cursa?: CursaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateInput = {
    id_disciplina?: number
    id_curso: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    leciona?: LecionaUncheckedCreateNestedManyWithoutDisciplinaInput
    cursa?: CursaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUpdateInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    tipoDisciplina?: TipoDisciplinaUpdateOneRequiredWithoutDisciplinasNestedInput
    curso?: CursoUpdateOneRequiredWithoutDisciplinasNestedInput
    leciona?: LecionaUpdateManyWithoutDisciplinaNestedInput
    cursa?: CursaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    leciona?: LecionaUncheckedUpdateManyWithoutDisciplinaNestedInput
    cursa?: CursaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaCreateManyInput = {
    id_disciplina?: number
    id_curso: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
  }

  export type DisciplinaUpdateManyMutationInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type DisciplinaUncheckedUpdateManyInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type LecionaCreateInput = {
    professor: ProfessorCreateNestedOneWithoutLecionaInput
    disciplina: DisciplinaCreateNestedOneWithoutLecionaInput
  }

  export type LecionaUncheckedCreateInput = {
    id_leciona?: number
    id_professor: number
    id_disciplina: number
  }

  export type LecionaUpdateInput = {
    professor?: ProfessorUpdateOneRequiredWithoutLecionaNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutLecionaNestedInput
  }

  export type LecionaUncheckedUpdateInput = {
    id_leciona?: IntFieldUpdateOperationsInput | number
    id_professor?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type LecionaCreateManyInput = {
    id_leciona?: number
    id_professor: number
    id_disciplina: number
  }

  export type LecionaUpdateManyMutationInput = {

  }

  export type LecionaUncheckedUpdateManyInput = {
    id_leciona?: IntFieldUpdateOperationsInput | number
    id_professor?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type AlunoCreateInput = {
    tx_nome: string
    tx_sexo: $Enums.Sexo
    dt_nascimento: Date | string
    Cursa?: CursaCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    id_aluno?: number
    tx_nome: string
    tx_sexo: $Enums.Sexo
    dt_nascimento: Date | string
    Cursa?: CursaUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    Cursa?: CursaUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    Cursa?: CursaUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    id_aluno?: number
    tx_nome: string
    tx_sexo: $Enums.Sexo
    dt_nascimento: Date | string
  }

  export type AlunoUpdateManyMutationInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CursaCreateInput = {
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
    aluno: AlunoCreateNestedOneWithoutCursaInput
    disciplina: DisciplinaCreateNestedOneWithoutCursaInput
  }

  export type CursaUncheckedCreateInput = {
    id_cursa?: number
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
  }

  export type CursaUpdateInput = {
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
    aluno?: AlunoUpdateOneRequiredWithoutCursaNestedInput
    disciplina?: DisciplinaUpdateOneRequiredWithoutCursaNestedInput
  }

  export type CursaUncheckedUpdateInput = {
    id_cursa?: IntFieldUpdateOperationsInput | number
    id_aluno?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CursaCreateManyInput = {
    id_cursa?: number
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
  }

  export type CursaUpdateManyMutationInput = {
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CursaUncheckedUpdateManyInput = {
    id_cursa?: IntFieldUpdateOperationsInput | number
    id_aluno?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
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

  export type ProfessorListRelationFilter = {
    every?: ProfessorWhereInput
    some?: ProfessorWhereInput
    none?: ProfessorWhereInput
  }

  export type ProfessorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TituloCountOrderByAggregateInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TituloAvgOrderByAggregateInput = {
    id_titulo?: SortOrder
  }

  export type TituloMaxOrderByAggregateInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TituloMinOrderByAggregateInput = {
    id_titulo?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TituloSumOrderByAggregateInput = {
    id_titulo?: SortOrder
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

  export type EnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type EnumEstadoCivilFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCivil | EnumEstadoCivilFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCivilFilter<$PrismaModel> | $Enums.EstadoCivil
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

  export type TituloScalarRelationFilter = {
    is?: TituloWhereInput
    isNot?: TituloWhereInput
  }

  export type LecionaListRelationFilter = {
    every?: LecionaWhereInput
    some?: LecionaWhereInput
    none?: LecionaWhereInput
  }

  export type LecionaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    tx_estado_civil?: SortOrder
    dt_nascimento?: SortOrder
    tx_telefone?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    id_professor?: SortOrder
    id_titulo?: SortOrder
  }

  export type EnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type EnumEstadoCivilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCivil | EnumEstadoCivilFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCivilWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCivil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCivilFilter<$PrismaModel>
    _max?: NestedEnumEstadoCivilFilter<$PrismaModel>
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

  export type CursoListRelationFilter = {
    every?: CursoWhereInput
    some?: CursoWhereInput
    none?: CursoWhereInput
  }

  export type CursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstituicaoCountOrderByAggregateInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
  }

  export type InstituicaoAvgOrderByAggregateInput = {
    id_instituicao?: SortOrder
  }

  export type InstituicaoMaxOrderByAggregateInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
  }

  export type InstituicaoMinOrderByAggregateInput = {
    id_instituicao?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
  }

  export type InstituicaoSumOrderByAggregateInput = {
    id_instituicao?: SortOrder
  }

  export type TipoCursoCountOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TipoCursoAvgOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
  }

  export type TipoCursoMaxOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TipoCursoMinOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TipoCursoSumOrderByAggregateInput = {
    id_tipo_curso?: SortOrder
  }

  export type InstituicaoScalarRelationFilter = {
    is?: InstituicaoWhereInput
    isNot?: InstituicaoWhereInput
  }

  export type TipoCursoScalarRelationFilter = {
    is?: TipoCursoWhereInput
    isNot?: TipoCursoWhereInput
  }

  export type DisciplinaListRelationFilter = {
    every?: DisciplinaWhereInput
    some?: DisciplinaWhereInput
    none?: DisciplinaWhereInput
  }

  export type DisciplinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CursoCountOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
    tx_descricao?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    id_curso?: SortOrder
    id_instituicao?: SortOrder
    id_tipo_curso?: SortOrder
  }

  export type TipoDisciplinaCountOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TipoDisciplinaAvgOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
  }

  export type TipoDisciplinaMaxOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TipoDisciplinaMinOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
    tx_descricao?: SortOrder
  }

  export type TipoDisciplinaSumOrderByAggregateInput = {
    id_tipo_disciplina?: SortOrder
  }

  export type TipoDisciplinaScalarRelationFilter = {
    is?: TipoDisciplinaWhereInput
    isNot?: TipoDisciplinaWhereInput
  }

  export type CursoScalarRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type CursaListRelationFilter = {
    every?: CursaWhereInput
    some?: CursaWhereInput
    none?: CursaWhereInput
  }

  export type CursaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisciplinaCountOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type DisciplinaAvgOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    tx_sigla?: SortOrder
    tx_descricao?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type DisciplinaSumOrderByAggregateInput = {
    id_disciplina?: SortOrder
    id_curso?: SortOrder
    id_tipo_disciplina?: SortOrder
    in_periodo?: SortOrder
    in_carga_horaria?: SortOrder
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type DisciplinaScalarRelationFilter = {
    is?: DisciplinaWhereInput
    isNot?: DisciplinaWhereInput
  }

  export type LecionaCountOrderByAggregateInput = {
    id_leciona?: SortOrder
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type LecionaAvgOrderByAggregateInput = {
    id_leciona?: SortOrder
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type LecionaMaxOrderByAggregateInput = {
    id_leciona?: SortOrder
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type LecionaMinOrderByAggregateInput = {
    id_leciona?: SortOrder
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type LecionaSumOrderByAggregateInput = {
    id_leciona?: SortOrder
    id_professor?: SortOrder
    id_disciplina?: SortOrder
  }

  export type AlunoCountOrderByAggregateInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
  }

  export type AlunoAvgOrderByAggregateInput = {
    id_aluno?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    id_aluno?: SortOrder
    tx_nome?: SortOrder
    tx_sexo?: SortOrder
    dt_nascimento?: SortOrder
  }

  export type AlunoSumOrderByAggregateInput = {
    id_aluno?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlunoScalarRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type CursaId_alunoId_disciplinaIn_anoIn_semestreCompoundUniqueInput = {
    id_aluno: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
  }

  export type CursaCountOrderByAggregateInput = {
    id_cursa?: SortOrder
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nm_nota1?: SortOrder
    nm_nota2?: SortOrder
    nm_nota3?: SortOrder
    bl_aprovado?: SortOrder
  }

  export type CursaAvgOrderByAggregateInput = {
    id_cursa?: SortOrder
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nm_nota1?: SortOrder
    nm_nota2?: SortOrder
    nm_nota3?: SortOrder
  }

  export type CursaMaxOrderByAggregateInput = {
    id_cursa?: SortOrder
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nm_nota1?: SortOrder
    nm_nota2?: SortOrder
    nm_nota3?: SortOrder
    bl_aprovado?: SortOrder
  }

  export type CursaMinOrderByAggregateInput = {
    id_cursa?: SortOrder
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nm_nota1?: SortOrder
    nm_nota2?: SortOrder
    nm_nota3?: SortOrder
    bl_aprovado?: SortOrder
  }

  export type CursaSumOrderByAggregateInput = {
    id_cursa?: SortOrder
    id_aluno?: SortOrder
    id_disciplina?: SortOrder
    in_ano?: SortOrder
    in_semestre?: SortOrder
    in_faltas?: SortOrder
    nm_nota1?: SortOrder
    nm_nota2?: SortOrder
    nm_nota3?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfessorCreateNestedManyWithoutTituloInput = {
    create?: XOR<ProfessorCreateWithoutTituloInput, ProfessorUncheckedCreateWithoutTituloInput> | ProfessorCreateWithoutTituloInput[] | ProfessorUncheckedCreateWithoutTituloInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutTituloInput | ProfessorCreateOrConnectWithoutTituloInput[]
    createMany?: ProfessorCreateManyTituloInputEnvelope
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
  }

  export type ProfessorUncheckedCreateNestedManyWithoutTituloInput = {
    create?: XOR<ProfessorCreateWithoutTituloInput, ProfessorUncheckedCreateWithoutTituloInput> | ProfessorCreateWithoutTituloInput[] | ProfessorUncheckedCreateWithoutTituloInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutTituloInput | ProfessorCreateOrConnectWithoutTituloInput[]
    createMany?: ProfessorCreateManyTituloInputEnvelope
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProfessorUpdateManyWithoutTituloNestedInput = {
    create?: XOR<ProfessorCreateWithoutTituloInput, ProfessorUncheckedCreateWithoutTituloInput> | ProfessorCreateWithoutTituloInput[] | ProfessorUncheckedCreateWithoutTituloInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutTituloInput | ProfessorCreateOrConnectWithoutTituloInput[]
    upsert?: ProfessorUpsertWithWhereUniqueWithoutTituloInput | ProfessorUpsertWithWhereUniqueWithoutTituloInput[]
    createMany?: ProfessorCreateManyTituloInputEnvelope
    set?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    disconnect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    delete?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    update?: ProfessorUpdateWithWhereUniqueWithoutTituloInput | ProfessorUpdateWithWhereUniqueWithoutTituloInput[]
    updateMany?: ProfessorUpdateManyWithWhereWithoutTituloInput | ProfessorUpdateManyWithWhereWithoutTituloInput[]
    deleteMany?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessorUncheckedUpdateManyWithoutTituloNestedInput = {
    create?: XOR<ProfessorCreateWithoutTituloInput, ProfessorUncheckedCreateWithoutTituloInput> | ProfessorCreateWithoutTituloInput[] | ProfessorUncheckedCreateWithoutTituloInput[]
    connectOrCreate?: ProfessorCreateOrConnectWithoutTituloInput | ProfessorCreateOrConnectWithoutTituloInput[]
    upsert?: ProfessorUpsertWithWhereUniqueWithoutTituloInput | ProfessorUpsertWithWhereUniqueWithoutTituloInput[]
    createMany?: ProfessorCreateManyTituloInputEnvelope
    set?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    disconnect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    delete?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    connect?: ProfessorWhereUniqueInput | ProfessorWhereUniqueInput[]
    update?: ProfessorUpdateWithWhereUniqueWithoutTituloInput | ProfessorUpdateWithWhereUniqueWithoutTituloInput[]
    updateMany?: ProfessorUpdateManyWithWhereWithoutTituloInput | ProfessorUpdateManyWithWhereWithoutTituloInput[]
    deleteMany?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
  }

  export type TituloCreateNestedOneWithoutProfessoresInput = {
    create?: XOR<TituloCreateWithoutProfessoresInput, TituloUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: TituloCreateOrConnectWithoutProfessoresInput
    connect?: TituloWhereUniqueInput
  }

  export type LecionaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<LecionaCreateWithoutProfessorInput, LecionaUncheckedCreateWithoutProfessorInput> | LecionaCreateWithoutProfessorInput[] | LecionaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: LecionaCreateOrConnectWithoutProfessorInput | LecionaCreateOrConnectWithoutProfessorInput[]
    createMany?: LecionaCreateManyProfessorInputEnvelope
    connect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
  }

  export type LecionaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<LecionaCreateWithoutProfessorInput, LecionaUncheckedCreateWithoutProfessorInput> | LecionaCreateWithoutProfessorInput[] | LecionaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: LecionaCreateOrConnectWithoutProfessorInput | LecionaCreateOrConnectWithoutProfessorInput[]
    createMany?: LecionaCreateManyProfessorInputEnvelope
    connect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
  }

  export type EnumSexoFieldUpdateOperationsInput = {
    set?: $Enums.Sexo
  }

  export type EnumEstadoCivilFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCivil
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TituloUpdateOneRequiredWithoutProfessoresNestedInput = {
    create?: XOR<TituloCreateWithoutProfessoresInput, TituloUncheckedCreateWithoutProfessoresInput>
    connectOrCreate?: TituloCreateOrConnectWithoutProfessoresInput
    upsert?: TituloUpsertWithoutProfessoresInput
    connect?: TituloWhereUniqueInput
    update?: XOR<XOR<TituloUpdateToOneWithWhereWithoutProfessoresInput, TituloUpdateWithoutProfessoresInput>, TituloUncheckedUpdateWithoutProfessoresInput>
  }

  export type LecionaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<LecionaCreateWithoutProfessorInput, LecionaUncheckedCreateWithoutProfessorInput> | LecionaCreateWithoutProfessorInput[] | LecionaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: LecionaCreateOrConnectWithoutProfessorInput | LecionaCreateOrConnectWithoutProfessorInput[]
    upsert?: LecionaUpsertWithWhereUniqueWithoutProfessorInput | LecionaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: LecionaCreateManyProfessorInputEnvelope
    set?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    disconnect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    delete?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    connect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    update?: LecionaUpdateWithWhereUniqueWithoutProfessorInput | LecionaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: LecionaUpdateManyWithWhereWithoutProfessorInput | LecionaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: LecionaScalarWhereInput | LecionaScalarWhereInput[]
  }

  export type LecionaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<LecionaCreateWithoutProfessorInput, LecionaUncheckedCreateWithoutProfessorInput> | LecionaCreateWithoutProfessorInput[] | LecionaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: LecionaCreateOrConnectWithoutProfessorInput | LecionaCreateOrConnectWithoutProfessorInput[]
    upsert?: LecionaUpsertWithWhereUniqueWithoutProfessorInput | LecionaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: LecionaCreateManyProfessorInputEnvelope
    set?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    disconnect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    delete?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    connect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    update?: LecionaUpdateWithWhereUniqueWithoutProfessorInput | LecionaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: LecionaUpdateManyWithWhereWithoutProfessorInput | LecionaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: LecionaScalarWhereInput | LecionaScalarWhereInput[]
  }

  export type CursoCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput> | CursoCreateWithoutInstituicaoInput[] | CursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstituicaoInput | CursoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: CursoCreateManyInstituicaoInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutInstituicaoInput = {
    create?: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput> | CursoCreateWithoutInstituicaoInput[] | CursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstituicaoInput | CursoCreateOrConnectWithoutInstituicaoInput[]
    createMany?: CursoCreateManyInstituicaoInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput> | CursoCreateWithoutInstituicaoInput[] | CursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstituicaoInput | CursoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutInstituicaoInput | CursoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: CursoCreateManyInstituicaoInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutInstituicaoInput | CursoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutInstituicaoInput | CursoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type CursoUncheckedUpdateManyWithoutInstituicaoNestedInput = {
    create?: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput> | CursoCreateWithoutInstituicaoInput[] | CursoUncheckedCreateWithoutInstituicaoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutInstituicaoInput | CursoCreateOrConnectWithoutInstituicaoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutInstituicaoInput | CursoUpsertWithWhereUniqueWithoutInstituicaoInput[]
    createMany?: CursoCreateManyInstituicaoInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutInstituicaoInput | CursoUpdateWithWhereUniqueWithoutInstituicaoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutInstituicaoInput | CursoUpdateManyWithWhereWithoutInstituicaoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type CursoCreateNestedManyWithoutTipoCursoInput = {
    create?: XOR<CursoCreateWithoutTipoCursoInput, CursoUncheckedCreateWithoutTipoCursoInput> | CursoCreateWithoutTipoCursoInput[] | CursoUncheckedCreateWithoutTipoCursoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutTipoCursoInput | CursoCreateOrConnectWithoutTipoCursoInput[]
    createMany?: CursoCreateManyTipoCursoInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutTipoCursoInput = {
    create?: XOR<CursoCreateWithoutTipoCursoInput, CursoUncheckedCreateWithoutTipoCursoInput> | CursoCreateWithoutTipoCursoInput[] | CursoUncheckedCreateWithoutTipoCursoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutTipoCursoInput | CursoCreateOrConnectWithoutTipoCursoInput[]
    createMany?: CursoCreateManyTipoCursoInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUpdateManyWithoutTipoCursoNestedInput = {
    create?: XOR<CursoCreateWithoutTipoCursoInput, CursoUncheckedCreateWithoutTipoCursoInput> | CursoCreateWithoutTipoCursoInput[] | CursoUncheckedCreateWithoutTipoCursoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutTipoCursoInput | CursoCreateOrConnectWithoutTipoCursoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutTipoCursoInput | CursoUpsertWithWhereUniqueWithoutTipoCursoInput[]
    createMany?: CursoCreateManyTipoCursoInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutTipoCursoInput | CursoUpdateWithWhereUniqueWithoutTipoCursoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutTipoCursoInput | CursoUpdateManyWithWhereWithoutTipoCursoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type CursoUncheckedUpdateManyWithoutTipoCursoNestedInput = {
    create?: XOR<CursoCreateWithoutTipoCursoInput, CursoUncheckedCreateWithoutTipoCursoInput> | CursoCreateWithoutTipoCursoInput[] | CursoUncheckedCreateWithoutTipoCursoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutTipoCursoInput | CursoCreateOrConnectWithoutTipoCursoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutTipoCursoInput | CursoUpsertWithWhereUniqueWithoutTipoCursoInput[]
    createMany?: CursoCreateManyTipoCursoInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutTipoCursoInput | CursoUpdateWithWhereUniqueWithoutTipoCursoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutTipoCursoInput | CursoUpdateManyWithWhereWithoutTipoCursoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type InstituicaoCreateNestedOneWithoutCursosInput = {
    create?: XOR<InstituicaoCreateWithoutCursosInput, InstituicaoUncheckedCreateWithoutCursosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutCursosInput
    connect?: InstituicaoWhereUniqueInput
  }

  export type TipoCursoCreateNestedOneWithoutCursosInput = {
    create?: XOR<TipoCursoCreateWithoutCursosInput, TipoCursoUncheckedCreateWithoutCursosInput>
    connectOrCreate?: TipoCursoCreateOrConnectWithoutCursosInput
    connect?: TipoCursoWhereUniqueInput
  }

  export type DisciplinaCreateNestedManyWithoutCursoInput = {
    create?: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput> | DisciplinaCreateWithoutCursoInput[] | DisciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursoInput | DisciplinaCreateOrConnectWithoutCursoInput[]
    createMany?: DisciplinaCreateManyCursoInputEnvelope
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
  }

  export type DisciplinaUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput> | DisciplinaCreateWithoutCursoInput[] | DisciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursoInput | DisciplinaCreateOrConnectWithoutCursoInput[]
    createMany?: DisciplinaCreateManyCursoInputEnvelope
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
  }

  export type InstituicaoUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<InstituicaoCreateWithoutCursosInput, InstituicaoUncheckedCreateWithoutCursosInput>
    connectOrCreate?: InstituicaoCreateOrConnectWithoutCursosInput
    upsert?: InstituicaoUpsertWithoutCursosInput
    connect?: InstituicaoWhereUniqueInput
    update?: XOR<XOR<InstituicaoUpdateToOneWithWhereWithoutCursosInput, InstituicaoUpdateWithoutCursosInput>, InstituicaoUncheckedUpdateWithoutCursosInput>
  }

  export type TipoCursoUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<TipoCursoCreateWithoutCursosInput, TipoCursoUncheckedCreateWithoutCursosInput>
    connectOrCreate?: TipoCursoCreateOrConnectWithoutCursosInput
    upsert?: TipoCursoUpsertWithoutCursosInput
    connect?: TipoCursoWhereUniqueInput
    update?: XOR<XOR<TipoCursoUpdateToOneWithWhereWithoutCursosInput, TipoCursoUpdateWithoutCursosInput>, TipoCursoUncheckedUpdateWithoutCursosInput>
  }

  export type DisciplinaUpdateManyWithoutCursoNestedInput = {
    create?: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput> | DisciplinaCreateWithoutCursoInput[] | DisciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursoInput | DisciplinaCreateOrConnectWithoutCursoInput[]
    upsert?: DisciplinaUpsertWithWhereUniqueWithoutCursoInput | DisciplinaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: DisciplinaCreateManyCursoInputEnvelope
    set?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    disconnect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    delete?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    update?: DisciplinaUpdateWithWhereUniqueWithoutCursoInput | DisciplinaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: DisciplinaUpdateManyWithWhereWithoutCursoInput | DisciplinaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
  }

  export type DisciplinaUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput> | DisciplinaCreateWithoutCursoInput[] | DisciplinaUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursoInput | DisciplinaCreateOrConnectWithoutCursoInput[]
    upsert?: DisciplinaUpsertWithWhereUniqueWithoutCursoInput | DisciplinaUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: DisciplinaCreateManyCursoInputEnvelope
    set?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    disconnect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    delete?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    update?: DisciplinaUpdateWithWhereUniqueWithoutCursoInput | DisciplinaUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: DisciplinaUpdateManyWithWhereWithoutCursoInput | DisciplinaUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
  }

  export type DisciplinaCreateNestedManyWithoutTipoDisciplinaInput = {
    create?: XOR<DisciplinaCreateWithoutTipoDisciplinaInput, DisciplinaUncheckedCreateWithoutTipoDisciplinaInput> | DisciplinaCreateWithoutTipoDisciplinaInput[] | DisciplinaUncheckedCreateWithoutTipoDisciplinaInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutTipoDisciplinaInput | DisciplinaCreateOrConnectWithoutTipoDisciplinaInput[]
    createMany?: DisciplinaCreateManyTipoDisciplinaInputEnvelope
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
  }

  export type DisciplinaUncheckedCreateNestedManyWithoutTipoDisciplinaInput = {
    create?: XOR<DisciplinaCreateWithoutTipoDisciplinaInput, DisciplinaUncheckedCreateWithoutTipoDisciplinaInput> | DisciplinaCreateWithoutTipoDisciplinaInput[] | DisciplinaUncheckedCreateWithoutTipoDisciplinaInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutTipoDisciplinaInput | DisciplinaCreateOrConnectWithoutTipoDisciplinaInput[]
    createMany?: DisciplinaCreateManyTipoDisciplinaInputEnvelope
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
  }

  export type DisciplinaUpdateManyWithoutTipoDisciplinaNestedInput = {
    create?: XOR<DisciplinaCreateWithoutTipoDisciplinaInput, DisciplinaUncheckedCreateWithoutTipoDisciplinaInput> | DisciplinaCreateWithoutTipoDisciplinaInput[] | DisciplinaUncheckedCreateWithoutTipoDisciplinaInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutTipoDisciplinaInput | DisciplinaCreateOrConnectWithoutTipoDisciplinaInput[]
    upsert?: DisciplinaUpsertWithWhereUniqueWithoutTipoDisciplinaInput | DisciplinaUpsertWithWhereUniqueWithoutTipoDisciplinaInput[]
    createMany?: DisciplinaCreateManyTipoDisciplinaInputEnvelope
    set?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    disconnect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    delete?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    update?: DisciplinaUpdateWithWhereUniqueWithoutTipoDisciplinaInput | DisciplinaUpdateWithWhereUniqueWithoutTipoDisciplinaInput[]
    updateMany?: DisciplinaUpdateManyWithWhereWithoutTipoDisciplinaInput | DisciplinaUpdateManyWithWhereWithoutTipoDisciplinaInput[]
    deleteMany?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
  }

  export type DisciplinaUncheckedUpdateManyWithoutTipoDisciplinaNestedInput = {
    create?: XOR<DisciplinaCreateWithoutTipoDisciplinaInput, DisciplinaUncheckedCreateWithoutTipoDisciplinaInput> | DisciplinaCreateWithoutTipoDisciplinaInput[] | DisciplinaUncheckedCreateWithoutTipoDisciplinaInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutTipoDisciplinaInput | DisciplinaCreateOrConnectWithoutTipoDisciplinaInput[]
    upsert?: DisciplinaUpsertWithWhereUniqueWithoutTipoDisciplinaInput | DisciplinaUpsertWithWhereUniqueWithoutTipoDisciplinaInput[]
    createMany?: DisciplinaCreateManyTipoDisciplinaInputEnvelope
    set?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    disconnect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    delete?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    update?: DisciplinaUpdateWithWhereUniqueWithoutTipoDisciplinaInput | DisciplinaUpdateWithWhereUniqueWithoutTipoDisciplinaInput[]
    updateMany?: DisciplinaUpdateManyWithWhereWithoutTipoDisciplinaInput | DisciplinaUpdateManyWithWhereWithoutTipoDisciplinaInput[]
    deleteMany?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
  }

  export type TipoDisciplinaCreateNestedOneWithoutDisciplinasInput = {
    create?: XOR<TipoDisciplinaCreateWithoutDisciplinasInput, TipoDisciplinaUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: TipoDisciplinaCreateOrConnectWithoutDisciplinasInput
    connect?: TipoDisciplinaWhereUniqueInput
  }

  export type CursoCreateNestedOneWithoutDisciplinasInput = {
    create?: XOR<CursoCreateWithoutDisciplinasInput, CursoUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutDisciplinasInput
    connect?: CursoWhereUniqueInput
  }

  export type LecionaCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<LecionaCreateWithoutDisciplinaInput, LecionaUncheckedCreateWithoutDisciplinaInput> | LecionaCreateWithoutDisciplinaInput[] | LecionaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: LecionaCreateOrConnectWithoutDisciplinaInput | LecionaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: LecionaCreateManyDisciplinaInputEnvelope
    connect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
  }

  export type CursaCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<CursaCreateWithoutDisciplinaInput, CursaUncheckedCreateWithoutDisciplinaInput> | CursaCreateWithoutDisciplinaInput[] | CursaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: CursaCreateOrConnectWithoutDisciplinaInput | CursaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: CursaCreateManyDisciplinaInputEnvelope
    connect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
  }

  export type LecionaUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<LecionaCreateWithoutDisciplinaInput, LecionaUncheckedCreateWithoutDisciplinaInput> | LecionaCreateWithoutDisciplinaInput[] | LecionaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: LecionaCreateOrConnectWithoutDisciplinaInput | LecionaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: LecionaCreateManyDisciplinaInputEnvelope
    connect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
  }

  export type CursaUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<CursaCreateWithoutDisciplinaInput, CursaUncheckedCreateWithoutDisciplinaInput> | CursaCreateWithoutDisciplinaInput[] | CursaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: CursaCreateOrConnectWithoutDisciplinaInput | CursaCreateOrConnectWithoutDisciplinaInput[]
    createMany?: CursaCreateManyDisciplinaInputEnvelope
    connect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
  }

  export type TipoDisciplinaUpdateOneRequiredWithoutDisciplinasNestedInput = {
    create?: XOR<TipoDisciplinaCreateWithoutDisciplinasInput, TipoDisciplinaUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: TipoDisciplinaCreateOrConnectWithoutDisciplinasInput
    upsert?: TipoDisciplinaUpsertWithoutDisciplinasInput
    connect?: TipoDisciplinaWhereUniqueInput
    update?: XOR<XOR<TipoDisciplinaUpdateToOneWithWhereWithoutDisciplinasInput, TipoDisciplinaUpdateWithoutDisciplinasInput>, TipoDisciplinaUncheckedUpdateWithoutDisciplinasInput>
  }

  export type CursoUpdateOneRequiredWithoutDisciplinasNestedInput = {
    create?: XOR<CursoCreateWithoutDisciplinasInput, CursoUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: CursoCreateOrConnectWithoutDisciplinasInput
    upsert?: CursoUpsertWithoutDisciplinasInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutDisciplinasInput, CursoUpdateWithoutDisciplinasInput>, CursoUncheckedUpdateWithoutDisciplinasInput>
  }

  export type LecionaUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<LecionaCreateWithoutDisciplinaInput, LecionaUncheckedCreateWithoutDisciplinaInput> | LecionaCreateWithoutDisciplinaInput[] | LecionaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: LecionaCreateOrConnectWithoutDisciplinaInput | LecionaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: LecionaUpsertWithWhereUniqueWithoutDisciplinaInput | LecionaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: LecionaCreateManyDisciplinaInputEnvelope
    set?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    disconnect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    delete?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    connect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    update?: LecionaUpdateWithWhereUniqueWithoutDisciplinaInput | LecionaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: LecionaUpdateManyWithWhereWithoutDisciplinaInput | LecionaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: LecionaScalarWhereInput | LecionaScalarWhereInput[]
  }

  export type CursaUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<CursaCreateWithoutDisciplinaInput, CursaUncheckedCreateWithoutDisciplinaInput> | CursaCreateWithoutDisciplinaInput[] | CursaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: CursaCreateOrConnectWithoutDisciplinaInput | CursaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: CursaUpsertWithWhereUniqueWithoutDisciplinaInput | CursaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: CursaCreateManyDisciplinaInputEnvelope
    set?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    disconnect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    delete?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    connect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    update?: CursaUpdateWithWhereUniqueWithoutDisciplinaInput | CursaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: CursaUpdateManyWithWhereWithoutDisciplinaInput | CursaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: CursaScalarWhereInput | CursaScalarWhereInput[]
  }

  export type LecionaUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<LecionaCreateWithoutDisciplinaInput, LecionaUncheckedCreateWithoutDisciplinaInput> | LecionaCreateWithoutDisciplinaInput[] | LecionaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: LecionaCreateOrConnectWithoutDisciplinaInput | LecionaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: LecionaUpsertWithWhereUniqueWithoutDisciplinaInput | LecionaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: LecionaCreateManyDisciplinaInputEnvelope
    set?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    disconnect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    delete?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    connect?: LecionaWhereUniqueInput | LecionaWhereUniqueInput[]
    update?: LecionaUpdateWithWhereUniqueWithoutDisciplinaInput | LecionaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: LecionaUpdateManyWithWhereWithoutDisciplinaInput | LecionaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: LecionaScalarWhereInput | LecionaScalarWhereInput[]
  }

  export type CursaUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<CursaCreateWithoutDisciplinaInput, CursaUncheckedCreateWithoutDisciplinaInput> | CursaCreateWithoutDisciplinaInput[] | CursaUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: CursaCreateOrConnectWithoutDisciplinaInput | CursaCreateOrConnectWithoutDisciplinaInput[]
    upsert?: CursaUpsertWithWhereUniqueWithoutDisciplinaInput | CursaUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: CursaCreateManyDisciplinaInputEnvelope
    set?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    disconnect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    delete?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    connect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    update?: CursaUpdateWithWhereUniqueWithoutDisciplinaInput | CursaUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: CursaUpdateManyWithWhereWithoutDisciplinaInput | CursaUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: CursaScalarWhereInput | CursaScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutLecionaInput = {
    create?: XOR<ProfessorCreateWithoutLecionaInput, ProfessorUncheckedCreateWithoutLecionaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutLecionaInput
    connect?: ProfessorWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutLecionaInput = {
    create?: XOR<DisciplinaCreateWithoutLecionaInput, DisciplinaUncheckedCreateWithoutLecionaInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutLecionaInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type ProfessorUpdateOneRequiredWithoutLecionaNestedInput = {
    create?: XOR<ProfessorCreateWithoutLecionaInput, ProfessorUncheckedCreateWithoutLecionaInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutLecionaInput
    upsert?: ProfessorUpsertWithoutLecionaInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutLecionaInput, ProfessorUpdateWithoutLecionaInput>, ProfessorUncheckedUpdateWithoutLecionaInput>
  }

  export type DisciplinaUpdateOneRequiredWithoutLecionaNestedInput = {
    create?: XOR<DisciplinaCreateWithoutLecionaInput, DisciplinaUncheckedCreateWithoutLecionaInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutLecionaInput
    upsert?: DisciplinaUpsertWithoutLecionaInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutLecionaInput, DisciplinaUpdateWithoutLecionaInput>, DisciplinaUncheckedUpdateWithoutLecionaInput>
  }

  export type CursaCreateNestedManyWithoutAlunoInput = {
    create?: XOR<CursaCreateWithoutAlunoInput, CursaUncheckedCreateWithoutAlunoInput> | CursaCreateWithoutAlunoInput[] | CursaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: CursaCreateOrConnectWithoutAlunoInput | CursaCreateOrConnectWithoutAlunoInput[]
    createMany?: CursaCreateManyAlunoInputEnvelope
    connect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
  }

  export type CursaUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<CursaCreateWithoutAlunoInput, CursaUncheckedCreateWithoutAlunoInput> | CursaCreateWithoutAlunoInput[] | CursaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: CursaCreateOrConnectWithoutAlunoInput | CursaCreateOrConnectWithoutAlunoInput[]
    createMany?: CursaCreateManyAlunoInputEnvelope
    connect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
  }

  export type CursaUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<CursaCreateWithoutAlunoInput, CursaUncheckedCreateWithoutAlunoInput> | CursaCreateWithoutAlunoInput[] | CursaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: CursaCreateOrConnectWithoutAlunoInput | CursaCreateOrConnectWithoutAlunoInput[]
    upsert?: CursaUpsertWithWhereUniqueWithoutAlunoInput | CursaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: CursaCreateManyAlunoInputEnvelope
    set?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    disconnect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    delete?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    connect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    update?: CursaUpdateWithWhereUniqueWithoutAlunoInput | CursaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: CursaUpdateManyWithWhereWithoutAlunoInput | CursaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: CursaScalarWhereInput | CursaScalarWhereInput[]
  }

  export type CursaUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<CursaCreateWithoutAlunoInput, CursaUncheckedCreateWithoutAlunoInput> | CursaCreateWithoutAlunoInput[] | CursaUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: CursaCreateOrConnectWithoutAlunoInput | CursaCreateOrConnectWithoutAlunoInput[]
    upsert?: CursaUpsertWithWhereUniqueWithoutAlunoInput | CursaUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: CursaCreateManyAlunoInputEnvelope
    set?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    disconnect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    delete?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    connect?: CursaWhereUniqueInput | CursaWhereUniqueInput[]
    update?: CursaUpdateWithWhereUniqueWithoutAlunoInput | CursaUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: CursaUpdateManyWithWhereWithoutAlunoInput | CursaUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: CursaScalarWhereInput | CursaScalarWhereInput[]
  }

  export type AlunoCreateNestedOneWithoutCursaInput = {
    create?: XOR<AlunoCreateWithoutCursaInput, AlunoUncheckedCreateWithoutCursaInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutCursaInput
    connect?: AlunoWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutCursaInput = {
    create?: XOR<DisciplinaCreateWithoutCursaInput, DisciplinaUncheckedCreateWithoutCursaInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursaInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AlunoUpdateOneRequiredWithoutCursaNestedInput = {
    create?: XOR<AlunoCreateWithoutCursaInput, AlunoUncheckedCreateWithoutCursaInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutCursaInput
    upsert?: AlunoUpsertWithoutCursaInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutCursaInput, AlunoUpdateWithoutCursaInput>, AlunoUncheckedUpdateWithoutCursaInput>
  }

  export type DisciplinaUpdateOneRequiredWithoutCursaNestedInput = {
    create?: XOR<DisciplinaCreateWithoutCursaInput, DisciplinaUncheckedCreateWithoutCursaInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutCursaInput
    upsert?: DisciplinaUpsertWithoutCursaInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutCursaInput, DisciplinaUpdateWithoutCursaInput>, DisciplinaUncheckedUpdateWithoutCursaInput>
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

  export type NestedEnumSexoFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoFilter<$PrismaModel> | $Enums.Sexo
  }

  export type NestedEnumEstadoCivilFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCivil | EnumEstadoCivilFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCivilFilter<$PrismaModel> | $Enums.EstadoCivil
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

  export type NestedEnumSexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexo | EnumSexoFieldRefInput<$PrismaModel>
    in?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sexo[] | ListEnumSexoFieldRefInput<$PrismaModel>
    not?: NestedEnumSexoWithAggregatesFilter<$PrismaModel> | $Enums.Sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexoFilter<$PrismaModel>
    _max?: NestedEnumSexoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoCivilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCivil | EnumEstadoCivilFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCivilWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCivil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCivilFilter<$PrismaModel>
    _max?: NestedEnumEstadoCivilFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfessorCreateWithoutTituloInput = {
    tx_nome: string
    tx_sexo?: $Enums.Sexo
    tx_estado_civil?: $Enums.EstadoCivil
    dt_nascimento: Date | string
    tx_telefone: string
    leciona?: LecionaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutTituloInput = {
    id_professor?: number
    tx_nome: string
    tx_sexo?: $Enums.Sexo
    tx_estado_civil?: $Enums.EstadoCivil
    dt_nascimento: Date | string
    tx_telefone: string
    leciona?: LecionaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutTituloInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutTituloInput, ProfessorUncheckedCreateWithoutTituloInput>
  }

  export type ProfessorCreateManyTituloInputEnvelope = {
    data: ProfessorCreateManyTituloInput | ProfessorCreateManyTituloInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorUpsertWithWhereUniqueWithoutTituloInput = {
    where: ProfessorWhereUniqueInput
    update: XOR<ProfessorUpdateWithoutTituloInput, ProfessorUncheckedUpdateWithoutTituloInput>
    create: XOR<ProfessorCreateWithoutTituloInput, ProfessorUncheckedCreateWithoutTituloInput>
  }

  export type ProfessorUpdateWithWhereUniqueWithoutTituloInput = {
    where: ProfessorWhereUniqueInput
    data: XOR<ProfessorUpdateWithoutTituloInput, ProfessorUncheckedUpdateWithoutTituloInput>
  }

  export type ProfessorUpdateManyWithWhereWithoutTituloInput = {
    where: ProfessorScalarWhereInput
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyWithoutTituloInput>
  }

  export type ProfessorScalarWhereInput = {
    AND?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
    OR?: ProfessorScalarWhereInput[]
    NOT?: ProfessorScalarWhereInput | ProfessorScalarWhereInput[]
    id_professor?: IntFilter<"Professor"> | number
    id_titulo?: IntFilter<"Professor"> | number
    tx_nome?: StringFilter<"Professor"> | string
    tx_sexo?: EnumSexoFilter<"Professor"> | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFilter<"Professor"> | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFilter<"Professor"> | Date | string
    tx_telefone?: StringFilter<"Professor"> | string
  }

  export type TituloCreateWithoutProfessoresInput = {
    tx_descricao: string
  }

  export type TituloUncheckedCreateWithoutProfessoresInput = {
    id_titulo?: number
    tx_descricao: string
  }

  export type TituloCreateOrConnectWithoutProfessoresInput = {
    where: TituloWhereUniqueInput
    create: XOR<TituloCreateWithoutProfessoresInput, TituloUncheckedCreateWithoutProfessoresInput>
  }

  export type LecionaCreateWithoutProfessorInput = {
    disciplina: DisciplinaCreateNestedOneWithoutLecionaInput
  }

  export type LecionaUncheckedCreateWithoutProfessorInput = {
    id_leciona?: number
    id_disciplina: number
  }

  export type LecionaCreateOrConnectWithoutProfessorInput = {
    where: LecionaWhereUniqueInput
    create: XOR<LecionaCreateWithoutProfessorInput, LecionaUncheckedCreateWithoutProfessorInput>
  }

  export type LecionaCreateManyProfessorInputEnvelope = {
    data: LecionaCreateManyProfessorInput | LecionaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type TituloUpsertWithoutProfessoresInput = {
    update: XOR<TituloUpdateWithoutProfessoresInput, TituloUncheckedUpdateWithoutProfessoresInput>
    create: XOR<TituloCreateWithoutProfessoresInput, TituloUncheckedCreateWithoutProfessoresInput>
    where?: TituloWhereInput
  }

  export type TituloUpdateToOneWithWhereWithoutProfessoresInput = {
    where?: TituloWhereInput
    data: XOR<TituloUpdateWithoutProfessoresInput, TituloUncheckedUpdateWithoutProfessoresInput>
  }

  export type TituloUpdateWithoutProfessoresInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TituloUncheckedUpdateWithoutProfessoresInput = {
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type LecionaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: LecionaWhereUniqueInput
    update: XOR<LecionaUpdateWithoutProfessorInput, LecionaUncheckedUpdateWithoutProfessorInput>
    create: XOR<LecionaCreateWithoutProfessorInput, LecionaUncheckedCreateWithoutProfessorInput>
  }

  export type LecionaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: LecionaWhereUniqueInput
    data: XOR<LecionaUpdateWithoutProfessorInput, LecionaUncheckedUpdateWithoutProfessorInput>
  }

  export type LecionaUpdateManyWithWhereWithoutProfessorInput = {
    where: LecionaScalarWhereInput
    data: XOR<LecionaUpdateManyMutationInput, LecionaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type LecionaScalarWhereInput = {
    AND?: LecionaScalarWhereInput | LecionaScalarWhereInput[]
    OR?: LecionaScalarWhereInput[]
    NOT?: LecionaScalarWhereInput | LecionaScalarWhereInput[]
    id_leciona?: IntFilter<"Leciona"> | number
    id_professor?: IntFilter<"Leciona"> | number
    id_disciplina?: IntFilter<"Leciona"> | number
  }

  export type CursoCreateWithoutInstituicaoInput = {
    tx_descricao: string
    tipoCurso: TipoCursoCreateNestedOneWithoutCursosInput
    disciplinas?: DisciplinaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutInstituicaoInput = {
    id_curso?: number
    id_tipo_curso: number
    tx_descricao: string
    disciplinas?: DisciplinaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutInstituicaoInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput>
  }

  export type CursoCreateManyInstituicaoInputEnvelope = {
    data: CursoCreateManyInstituicaoInput | CursoCreateManyInstituicaoInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithWhereUniqueWithoutInstituicaoInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutInstituicaoInput, CursoUncheckedUpdateWithoutInstituicaoInput>
    create: XOR<CursoCreateWithoutInstituicaoInput, CursoUncheckedCreateWithoutInstituicaoInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutInstituicaoInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutInstituicaoInput, CursoUncheckedUpdateWithoutInstituicaoInput>
  }

  export type CursoUpdateManyWithWhereWithoutInstituicaoInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutInstituicaoInput>
  }

  export type CursoScalarWhereInput = {
    AND?: CursoScalarWhereInput | CursoScalarWhereInput[]
    OR?: CursoScalarWhereInput[]
    NOT?: CursoScalarWhereInput | CursoScalarWhereInput[]
    id_curso?: IntFilter<"Curso"> | number
    id_instituicao?: IntFilter<"Curso"> | number
    id_tipo_curso?: IntFilter<"Curso"> | number
    tx_descricao?: StringFilter<"Curso"> | string
  }

  export type CursoCreateWithoutTipoCursoInput = {
    tx_descricao: string
    instituicao: InstituicaoCreateNestedOneWithoutCursosInput
    disciplinas?: DisciplinaCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutTipoCursoInput = {
    id_curso?: number
    id_instituicao: number
    tx_descricao: string
    disciplinas?: DisciplinaUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutTipoCursoInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutTipoCursoInput, CursoUncheckedCreateWithoutTipoCursoInput>
  }

  export type CursoCreateManyTipoCursoInputEnvelope = {
    data: CursoCreateManyTipoCursoInput | CursoCreateManyTipoCursoInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithWhereUniqueWithoutTipoCursoInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutTipoCursoInput, CursoUncheckedUpdateWithoutTipoCursoInput>
    create: XOR<CursoCreateWithoutTipoCursoInput, CursoUncheckedCreateWithoutTipoCursoInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutTipoCursoInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutTipoCursoInput, CursoUncheckedUpdateWithoutTipoCursoInput>
  }

  export type CursoUpdateManyWithWhereWithoutTipoCursoInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutTipoCursoInput>
  }

  export type InstituicaoCreateWithoutCursosInput = {
    tx_sigla: string
    tx_descricao: string
  }

  export type InstituicaoUncheckedCreateWithoutCursosInput = {
    id_instituicao?: number
    tx_sigla: string
    tx_descricao: string
  }

  export type InstituicaoCreateOrConnectWithoutCursosInput = {
    where: InstituicaoWhereUniqueInput
    create: XOR<InstituicaoCreateWithoutCursosInput, InstituicaoUncheckedCreateWithoutCursosInput>
  }

  export type TipoCursoCreateWithoutCursosInput = {
    tx_descricao: string
  }

  export type TipoCursoUncheckedCreateWithoutCursosInput = {
    id_tipo_curso?: number
    tx_descricao: string
  }

  export type TipoCursoCreateOrConnectWithoutCursosInput = {
    where: TipoCursoWhereUniqueInput
    create: XOR<TipoCursoCreateWithoutCursosInput, TipoCursoUncheckedCreateWithoutCursosInput>
  }

  export type DisciplinaCreateWithoutCursoInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    tipoDisciplina: TipoDisciplinaCreateNestedOneWithoutDisciplinasInput
    leciona?: LecionaCreateNestedManyWithoutDisciplinaInput
    cursa?: CursaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutCursoInput = {
    id_disciplina?: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    leciona?: LecionaUncheckedCreateNestedManyWithoutDisciplinaInput
    cursa?: CursaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutCursoInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput>
  }

  export type DisciplinaCreateManyCursoInputEnvelope = {
    data: DisciplinaCreateManyCursoInput | DisciplinaCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type InstituicaoUpsertWithoutCursosInput = {
    update: XOR<InstituicaoUpdateWithoutCursosInput, InstituicaoUncheckedUpdateWithoutCursosInput>
    create: XOR<InstituicaoCreateWithoutCursosInput, InstituicaoUncheckedCreateWithoutCursosInput>
    where?: InstituicaoWhereInput
  }

  export type InstituicaoUpdateToOneWithWhereWithoutCursosInput = {
    where?: InstituicaoWhereInput
    data: XOR<InstituicaoUpdateWithoutCursosInput, InstituicaoUncheckedUpdateWithoutCursosInput>
  }

  export type InstituicaoUpdateWithoutCursosInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type InstituicaoUncheckedUpdateWithoutCursosInput = {
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoCursoUpsertWithoutCursosInput = {
    update: XOR<TipoCursoUpdateWithoutCursosInput, TipoCursoUncheckedUpdateWithoutCursosInput>
    create: XOR<TipoCursoCreateWithoutCursosInput, TipoCursoUncheckedCreateWithoutCursosInput>
    where?: TipoCursoWhereInput
  }

  export type TipoCursoUpdateToOneWithWhereWithoutCursosInput = {
    where?: TipoCursoWhereInput
    data: XOR<TipoCursoUpdateWithoutCursosInput, TipoCursoUncheckedUpdateWithoutCursosInput>
  }

  export type TipoCursoUpdateWithoutCursosInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoCursoUncheckedUpdateWithoutCursosInput = {
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaUpsertWithWhereUniqueWithoutCursoInput = {
    where: DisciplinaWhereUniqueInput
    update: XOR<DisciplinaUpdateWithoutCursoInput, DisciplinaUncheckedUpdateWithoutCursoInput>
    create: XOR<DisciplinaCreateWithoutCursoInput, DisciplinaUncheckedCreateWithoutCursoInput>
  }

  export type DisciplinaUpdateWithWhereUniqueWithoutCursoInput = {
    where: DisciplinaWhereUniqueInput
    data: XOR<DisciplinaUpdateWithoutCursoInput, DisciplinaUncheckedUpdateWithoutCursoInput>
  }

  export type DisciplinaUpdateManyWithWhereWithoutCursoInput = {
    where: DisciplinaScalarWhereInput
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyWithoutCursoInput>
  }

  export type DisciplinaScalarWhereInput = {
    AND?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
    OR?: DisciplinaScalarWhereInput[]
    NOT?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
    id_disciplina?: IntFilter<"Disciplina"> | number
    id_curso?: IntFilter<"Disciplina"> | number
    id_tipo_disciplina?: IntFilter<"Disciplina"> | number
    tx_sigla?: StringFilter<"Disciplina"> | string
    tx_descricao?: StringFilter<"Disciplina"> | string
    in_periodo?: IntFilter<"Disciplina"> | number
    in_carga_horaria?: IntFilter<"Disciplina"> | number
  }

  export type DisciplinaCreateWithoutTipoDisciplinaInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    curso: CursoCreateNestedOneWithoutDisciplinasInput
    leciona?: LecionaCreateNestedManyWithoutDisciplinaInput
    cursa?: CursaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutTipoDisciplinaInput = {
    id_disciplina?: number
    id_curso: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    leciona?: LecionaUncheckedCreateNestedManyWithoutDisciplinaInput
    cursa?: CursaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutTipoDisciplinaInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutTipoDisciplinaInput, DisciplinaUncheckedCreateWithoutTipoDisciplinaInput>
  }

  export type DisciplinaCreateManyTipoDisciplinaInputEnvelope = {
    data: DisciplinaCreateManyTipoDisciplinaInput | DisciplinaCreateManyTipoDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type DisciplinaUpsertWithWhereUniqueWithoutTipoDisciplinaInput = {
    where: DisciplinaWhereUniqueInput
    update: XOR<DisciplinaUpdateWithoutTipoDisciplinaInput, DisciplinaUncheckedUpdateWithoutTipoDisciplinaInput>
    create: XOR<DisciplinaCreateWithoutTipoDisciplinaInput, DisciplinaUncheckedCreateWithoutTipoDisciplinaInput>
  }

  export type DisciplinaUpdateWithWhereUniqueWithoutTipoDisciplinaInput = {
    where: DisciplinaWhereUniqueInput
    data: XOR<DisciplinaUpdateWithoutTipoDisciplinaInput, DisciplinaUncheckedUpdateWithoutTipoDisciplinaInput>
  }

  export type DisciplinaUpdateManyWithWhereWithoutTipoDisciplinaInput = {
    where: DisciplinaScalarWhereInput
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyWithoutTipoDisciplinaInput>
  }

  export type TipoDisciplinaCreateWithoutDisciplinasInput = {
    tx_descricao: string
  }

  export type TipoDisciplinaUncheckedCreateWithoutDisciplinasInput = {
    id_tipo_disciplina?: number
    tx_descricao: string
  }

  export type TipoDisciplinaCreateOrConnectWithoutDisciplinasInput = {
    where: TipoDisciplinaWhereUniqueInput
    create: XOR<TipoDisciplinaCreateWithoutDisciplinasInput, TipoDisciplinaUncheckedCreateWithoutDisciplinasInput>
  }

  export type CursoCreateWithoutDisciplinasInput = {
    tx_descricao: string
    instituicao: InstituicaoCreateNestedOneWithoutCursosInput
    tipoCurso: TipoCursoCreateNestedOneWithoutCursosInput
  }

  export type CursoUncheckedCreateWithoutDisciplinasInput = {
    id_curso?: number
    id_instituicao: number
    id_tipo_curso: number
    tx_descricao: string
  }

  export type CursoCreateOrConnectWithoutDisciplinasInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutDisciplinasInput, CursoUncheckedCreateWithoutDisciplinasInput>
  }

  export type LecionaCreateWithoutDisciplinaInput = {
    professor: ProfessorCreateNestedOneWithoutLecionaInput
  }

  export type LecionaUncheckedCreateWithoutDisciplinaInput = {
    id_leciona?: number
    id_professor: number
  }

  export type LecionaCreateOrConnectWithoutDisciplinaInput = {
    where: LecionaWhereUniqueInput
    create: XOR<LecionaCreateWithoutDisciplinaInput, LecionaUncheckedCreateWithoutDisciplinaInput>
  }

  export type LecionaCreateManyDisciplinaInputEnvelope = {
    data: LecionaCreateManyDisciplinaInput | LecionaCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type CursaCreateWithoutDisciplinaInput = {
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
    aluno: AlunoCreateNestedOneWithoutCursaInput
  }

  export type CursaUncheckedCreateWithoutDisciplinaInput = {
    id_cursa?: number
    id_aluno: number
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
  }

  export type CursaCreateOrConnectWithoutDisciplinaInput = {
    where: CursaWhereUniqueInput
    create: XOR<CursaCreateWithoutDisciplinaInput, CursaUncheckedCreateWithoutDisciplinaInput>
  }

  export type CursaCreateManyDisciplinaInputEnvelope = {
    data: CursaCreateManyDisciplinaInput | CursaCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type TipoDisciplinaUpsertWithoutDisciplinasInput = {
    update: XOR<TipoDisciplinaUpdateWithoutDisciplinasInput, TipoDisciplinaUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<TipoDisciplinaCreateWithoutDisciplinasInput, TipoDisciplinaUncheckedCreateWithoutDisciplinasInput>
    where?: TipoDisciplinaWhereInput
  }

  export type TipoDisciplinaUpdateToOneWithWhereWithoutDisciplinasInput = {
    where?: TipoDisciplinaWhereInput
    data: XOR<TipoDisciplinaUpdateWithoutDisciplinasInput, TipoDisciplinaUncheckedUpdateWithoutDisciplinasInput>
  }

  export type TipoDisciplinaUpdateWithoutDisciplinasInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type TipoDisciplinaUncheckedUpdateWithoutDisciplinasInput = {
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUpsertWithoutDisciplinasInput = {
    update: XOR<CursoUpdateWithoutDisciplinasInput, CursoUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<CursoCreateWithoutDisciplinasInput, CursoUncheckedCreateWithoutDisciplinasInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutDisciplinasInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutDisciplinasInput, CursoUncheckedUpdateWithoutDisciplinasInput>
  }

  export type CursoUpdateWithoutDisciplinasInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    instituicao?: InstituicaoUpdateOneRequiredWithoutCursosNestedInput
    tipoCurso?: TipoCursoUpdateOneRequiredWithoutCursosNestedInput
  }

  export type CursoUncheckedUpdateWithoutDisciplinasInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type LecionaUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: LecionaWhereUniqueInput
    update: XOR<LecionaUpdateWithoutDisciplinaInput, LecionaUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<LecionaCreateWithoutDisciplinaInput, LecionaUncheckedCreateWithoutDisciplinaInput>
  }

  export type LecionaUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: LecionaWhereUniqueInput
    data: XOR<LecionaUpdateWithoutDisciplinaInput, LecionaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type LecionaUpdateManyWithWhereWithoutDisciplinaInput = {
    where: LecionaScalarWhereInput
    data: XOR<LecionaUpdateManyMutationInput, LecionaUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type CursaUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: CursaWhereUniqueInput
    update: XOR<CursaUpdateWithoutDisciplinaInput, CursaUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<CursaCreateWithoutDisciplinaInput, CursaUncheckedCreateWithoutDisciplinaInput>
  }

  export type CursaUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: CursaWhereUniqueInput
    data: XOR<CursaUpdateWithoutDisciplinaInput, CursaUncheckedUpdateWithoutDisciplinaInput>
  }

  export type CursaUpdateManyWithWhereWithoutDisciplinaInput = {
    where: CursaScalarWhereInput
    data: XOR<CursaUpdateManyMutationInput, CursaUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type CursaScalarWhereInput = {
    AND?: CursaScalarWhereInput | CursaScalarWhereInput[]
    OR?: CursaScalarWhereInput[]
    NOT?: CursaScalarWhereInput | CursaScalarWhereInput[]
    id_cursa?: IntFilter<"Cursa"> | number
    id_aluno?: IntFilter<"Cursa"> | number
    id_disciplina?: IntFilter<"Cursa"> | number
    in_ano?: IntFilter<"Cursa"> | number
    in_semestre?: IntFilter<"Cursa"> | number
    in_faltas?: IntFilter<"Cursa"> | number
    nm_nota1?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFilter<"Cursa"> | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFilter<"Cursa"> | boolean
  }

  export type ProfessorCreateWithoutLecionaInput = {
    tx_nome: string
    tx_sexo?: $Enums.Sexo
    tx_estado_civil?: $Enums.EstadoCivil
    dt_nascimento: Date | string
    tx_telefone: string
    titulo: TituloCreateNestedOneWithoutProfessoresInput
  }

  export type ProfessorUncheckedCreateWithoutLecionaInput = {
    id_professor?: number
    id_titulo: number
    tx_nome: string
    tx_sexo?: $Enums.Sexo
    tx_estado_civil?: $Enums.EstadoCivil
    dt_nascimento: Date | string
    tx_telefone: string
  }

  export type ProfessorCreateOrConnectWithoutLecionaInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutLecionaInput, ProfessorUncheckedCreateWithoutLecionaInput>
  }

  export type DisciplinaCreateWithoutLecionaInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    tipoDisciplina: TipoDisciplinaCreateNestedOneWithoutDisciplinasInput
    curso: CursoCreateNestedOneWithoutDisciplinasInput
    cursa?: CursaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutLecionaInput = {
    id_disciplina?: number
    id_curso: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    cursa?: CursaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutLecionaInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutLecionaInput, DisciplinaUncheckedCreateWithoutLecionaInput>
  }

  export type ProfessorUpsertWithoutLecionaInput = {
    update: XOR<ProfessorUpdateWithoutLecionaInput, ProfessorUncheckedUpdateWithoutLecionaInput>
    create: XOR<ProfessorCreateWithoutLecionaInput, ProfessorUncheckedCreateWithoutLecionaInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutLecionaInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutLecionaInput, ProfessorUncheckedUpdateWithoutLecionaInput>
  }

  export type ProfessorUpdateWithoutLecionaInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    titulo?: TituloUpdateOneRequiredWithoutProfessoresNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutLecionaInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    id_titulo?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaUpsertWithoutLecionaInput = {
    update: XOR<DisciplinaUpdateWithoutLecionaInput, DisciplinaUncheckedUpdateWithoutLecionaInput>
    create: XOR<DisciplinaCreateWithoutLecionaInput, DisciplinaUncheckedCreateWithoutLecionaInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutLecionaInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutLecionaInput, DisciplinaUncheckedUpdateWithoutLecionaInput>
  }

  export type DisciplinaUpdateWithoutLecionaInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    tipoDisciplina?: TipoDisciplinaUpdateOneRequiredWithoutDisciplinasNestedInput
    curso?: CursoUpdateOneRequiredWithoutDisciplinasNestedInput
    cursa?: CursaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutLecionaInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    cursa?: CursaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type CursaCreateWithoutAlunoInput = {
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
    disciplina: DisciplinaCreateNestedOneWithoutCursaInput
  }

  export type CursaUncheckedCreateWithoutAlunoInput = {
    id_cursa?: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
  }

  export type CursaCreateOrConnectWithoutAlunoInput = {
    where: CursaWhereUniqueInput
    create: XOR<CursaCreateWithoutAlunoInput, CursaUncheckedCreateWithoutAlunoInput>
  }

  export type CursaCreateManyAlunoInputEnvelope = {
    data: CursaCreateManyAlunoInput | CursaCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type CursaUpsertWithWhereUniqueWithoutAlunoInput = {
    where: CursaWhereUniqueInput
    update: XOR<CursaUpdateWithoutAlunoInput, CursaUncheckedUpdateWithoutAlunoInput>
    create: XOR<CursaCreateWithoutAlunoInput, CursaUncheckedCreateWithoutAlunoInput>
  }

  export type CursaUpdateWithWhereUniqueWithoutAlunoInput = {
    where: CursaWhereUniqueInput
    data: XOR<CursaUpdateWithoutAlunoInput, CursaUncheckedUpdateWithoutAlunoInput>
  }

  export type CursaUpdateManyWithWhereWithoutAlunoInput = {
    where: CursaScalarWhereInput
    data: XOR<CursaUpdateManyMutationInput, CursaUncheckedUpdateManyWithoutAlunoInput>
  }

  export type AlunoCreateWithoutCursaInput = {
    tx_nome: string
    tx_sexo: $Enums.Sexo
    dt_nascimento: Date | string
  }

  export type AlunoUncheckedCreateWithoutCursaInput = {
    id_aluno?: number
    tx_nome: string
    tx_sexo: $Enums.Sexo
    dt_nascimento: Date | string
  }

  export type AlunoCreateOrConnectWithoutCursaInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutCursaInput, AlunoUncheckedCreateWithoutCursaInput>
  }

  export type DisciplinaCreateWithoutCursaInput = {
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    tipoDisciplina: TipoDisciplinaCreateNestedOneWithoutDisciplinasInput
    curso: CursoCreateNestedOneWithoutDisciplinasInput
    leciona?: LecionaCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutCursaInput = {
    id_disciplina?: number
    id_curso: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
    leciona?: LecionaUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutCursaInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutCursaInput, DisciplinaUncheckedCreateWithoutCursaInput>
  }

  export type AlunoUpsertWithoutCursaInput = {
    update: XOR<AlunoUpdateWithoutCursaInput, AlunoUncheckedUpdateWithoutCursaInput>
    create: XOR<AlunoCreateWithoutCursaInput, AlunoUncheckedCreateWithoutCursaInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutCursaInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutCursaInput, AlunoUncheckedUpdateWithoutCursaInput>
  }

  export type AlunoUpdateWithoutCursaInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlunoUncheckedUpdateWithoutCursaInput = {
    id_aluno?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplinaUpsertWithoutCursaInput = {
    update: XOR<DisciplinaUpdateWithoutCursaInput, DisciplinaUncheckedUpdateWithoutCursaInput>
    create: XOR<DisciplinaCreateWithoutCursaInput, DisciplinaUncheckedCreateWithoutCursaInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutCursaInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutCursaInput, DisciplinaUncheckedUpdateWithoutCursaInput>
  }

  export type DisciplinaUpdateWithoutCursaInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    tipoDisciplina?: TipoDisciplinaUpdateOneRequiredWithoutDisciplinasNestedInput
    curso?: CursoUpdateOneRequiredWithoutDisciplinasNestedInput
    leciona?: LecionaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutCursaInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    leciona?: LecionaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type ProfessorCreateManyTituloInput = {
    id_professor?: number
    tx_nome: string
    tx_sexo?: $Enums.Sexo
    tx_estado_civil?: $Enums.EstadoCivil
    dt_nascimento: Date | string
    tx_telefone: string
  }

  export type ProfessorUpdateWithoutTituloInput = {
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    leciona?: LecionaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutTituloInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
    leciona?: LecionaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateManyWithoutTituloInput = {
    id_professor?: IntFieldUpdateOperationsInput | number
    tx_nome?: StringFieldUpdateOperationsInput | string
    tx_sexo?: EnumSexoFieldUpdateOperationsInput | $Enums.Sexo
    tx_estado_civil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    tx_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type LecionaCreateManyProfessorInput = {
    id_leciona?: number
    id_disciplina: number
  }

  export type LecionaUpdateWithoutProfessorInput = {
    disciplina?: DisciplinaUpdateOneRequiredWithoutLecionaNestedInput
  }

  export type LecionaUncheckedUpdateWithoutProfessorInput = {
    id_leciona?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type LecionaUncheckedUpdateManyWithoutProfessorInput = {
    id_leciona?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type CursoCreateManyInstituicaoInput = {
    id_curso?: number
    id_tipo_curso: number
    tx_descricao: string
  }

  export type CursoUpdateWithoutInstituicaoInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    tipoCurso?: TipoCursoUpdateOneRequiredWithoutCursosNestedInput
    disciplinas?: DisciplinaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutInstituicaoInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplinas?: DisciplinaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutInstituicaoInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_tipo_curso?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateManyTipoCursoInput = {
    id_curso?: number
    id_instituicao: number
    tx_descricao: string
  }

  export type CursoUpdateWithoutTipoCursoInput = {
    tx_descricao?: StringFieldUpdateOperationsInput | string
    instituicao?: InstituicaoUpdateOneRequiredWithoutCursosNestedInput
    disciplinas?: DisciplinaUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutTipoCursoInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
    disciplinas?: DisciplinaUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutTipoCursoInput = {
    id_curso?: IntFieldUpdateOperationsInput | number
    id_instituicao?: IntFieldUpdateOperationsInput | number
    tx_descricao?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaCreateManyCursoInput = {
    id_disciplina?: number
    id_tipo_disciplina: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
  }

  export type DisciplinaUpdateWithoutCursoInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    tipoDisciplina?: TipoDisciplinaUpdateOneRequiredWithoutDisciplinasNestedInput
    leciona?: LecionaUpdateManyWithoutDisciplinaNestedInput
    cursa?: CursaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutCursoInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    leciona?: LecionaUncheckedUpdateManyWithoutDisciplinaNestedInput
    cursa?: CursaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateManyWithoutCursoInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_tipo_disciplina?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type DisciplinaCreateManyTipoDisciplinaInput = {
    id_disciplina?: number
    id_curso: number
    tx_sigla: string
    tx_descricao: string
    in_periodo: number
    in_carga_horaria: number
  }

  export type DisciplinaUpdateWithoutTipoDisciplinaInput = {
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    curso?: CursoUpdateOneRequiredWithoutDisciplinasNestedInput
    leciona?: LecionaUpdateManyWithoutDisciplinaNestedInput
    cursa?: CursaUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutTipoDisciplinaInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
    leciona?: LecionaUncheckedUpdateManyWithoutDisciplinaNestedInput
    cursa?: CursaUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateManyWithoutTipoDisciplinaInput = {
    id_disciplina?: IntFieldUpdateOperationsInput | number
    id_curso?: IntFieldUpdateOperationsInput | number
    tx_sigla?: StringFieldUpdateOperationsInput | string
    tx_descricao?: StringFieldUpdateOperationsInput | string
    in_periodo?: IntFieldUpdateOperationsInput | number
    in_carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type LecionaCreateManyDisciplinaInput = {
    id_leciona?: number
    id_professor: number
  }

  export type CursaCreateManyDisciplinaInput = {
    id_cursa?: number
    id_aluno: number
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
  }

  export type LecionaUpdateWithoutDisciplinaInput = {
    professor?: ProfessorUpdateOneRequiredWithoutLecionaNestedInput
  }

  export type LecionaUncheckedUpdateWithoutDisciplinaInput = {
    id_leciona?: IntFieldUpdateOperationsInput | number
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type LecionaUncheckedUpdateManyWithoutDisciplinaInput = {
    id_leciona?: IntFieldUpdateOperationsInput | number
    id_professor?: IntFieldUpdateOperationsInput | number
  }

  export type CursaUpdateWithoutDisciplinaInput = {
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
    aluno?: AlunoUpdateOneRequiredWithoutCursaNestedInput
  }

  export type CursaUncheckedUpdateWithoutDisciplinaInput = {
    id_cursa?: IntFieldUpdateOperationsInput | number
    id_aluno?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CursaUncheckedUpdateManyWithoutDisciplinaInput = {
    id_cursa?: IntFieldUpdateOperationsInput | number
    id_aluno?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CursaCreateManyAlunoInput = {
    id_cursa?: number
    id_disciplina: number
    in_ano: number
    in_semestre: number
    in_faltas?: number
    nm_nota1?: Decimal | DecimalJsLike | number | string
    nm_nota2?: Decimal | DecimalJsLike | number | string
    nm_nota3?: Decimal | DecimalJsLike | number | string
    bl_aprovado?: boolean
  }

  export type CursaUpdateWithoutAlunoInput = {
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
    disciplina?: DisciplinaUpdateOneRequiredWithoutCursaNestedInput
  }

  export type CursaUncheckedUpdateWithoutAlunoInput = {
    id_cursa?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CursaUncheckedUpdateManyWithoutAlunoInput = {
    id_cursa?: IntFieldUpdateOperationsInput | number
    id_disciplina?: IntFieldUpdateOperationsInput | number
    in_ano?: IntFieldUpdateOperationsInput | number
    in_semestre?: IntFieldUpdateOperationsInput | number
    in_faltas?: IntFieldUpdateOperationsInput | number
    nm_nota1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    nm_nota3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bl_aprovado?: BoolFieldUpdateOperationsInput | boolean
  }



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