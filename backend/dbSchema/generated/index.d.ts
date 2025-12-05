
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Topics
 * 
 */
export type Topics = $Result.DefaultSelection<Prisma.$TopicsPayload>
/**
 * Model Questions
 * 
 */
export type Questions = $Result.DefaultSelection<Prisma.$QuestionsPayload>
/**
 * Model TestCase
 * 
 */
export type TestCase = $Result.DefaultSelection<Prisma.$TestCasePayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Achievements
 * 
 */
export type Achievements = $Result.DefaultSelection<Prisma.$AchievementsPayload>
/**
 * Model StudentAchievements
 * 
 */
export type StudentAchievements = $Result.DefaultSelection<Prisma.$StudentAchievementsPayload>
/**
 * Model OTPStudent
 * 
 */
export type OTPStudent = $Result.DefaultSelection<Prisma.$OTPStudentPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Discussions
 * 
 */
export type Discussions = $Result.DefaultSelection<Prisma.$DiscussionsPayload>
/**
 * Model Contest
 * 
 */
export type Contest = $Result.DefaultSelection<Prisma.$ContestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topics`: Exposes CRUD operations for the **Topics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topics.findMany()
    * ```
    */
  get topics(): Prisma.TopicsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCase`: Exposes CRUD operations for the **TestCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCases
    * const testCases = await prisma.testCase.findMany()
    * ```
    */
  get testCase(): Prisma.TestCaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievements`: Exposes CRUD operations for the **Achievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievements.findMany()
    * ```
    */
  get achievements(): Prisma.AchievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAchievements`: Exposes CRUD operations for the **StudentAchievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAchievements
    * const studentAchievements = await prisma.studentAchievements.findMany()
    * ```
    */
  get studentAchievements(): Prisma.StudentAchievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oTPStudent`: Exposes CRUD operations for the **OTPStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPStudents
    * const oTPStudents = await prisma.oTPStudent.findMany()
    * ```
    */
  get oTPStudent(): Prisma.OTPStudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussions`: Exposes CRUD operations for the **Discussions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discussions
    * const discussions = await prisma.discussions.findMany()
    * ```
    */
  get discussions(): Prisma.DiscussionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contest`: Exposes CRUD operations for the **Contest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contests
    * const contests = await prisma.contest.findMany()
    * ```
    */
  get contest(): Prisma.ContestDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
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
    Student: 'Student',
    Topics: 'Topics',
    Questions: 'Questions',
    TestCase: 'TestCase',
    Submission: 'Submission',
    Achievements: 'Achievements',
    StudentAchievements: 'StudentAchievements',
    OTPStudent: 'OTPStudent',
    Session: 'Session',
    Discussions: 'Discussions',
    Contest: 'Contest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "student" | "topics" | "questions" | "testCase" | "submission" | "achievements" | "studentAchievements" | "oTPStudent" | "session" | "discussions" | "contest"
      txIsolationLevel: never
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Topics: {
        payload: Prisma.$TopicsPayload<ExtArgs>
        fields: Prisma.TopicsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          findFirst: {
            args: Prisma.TopicsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          findMany: {
            args: Prisma.TopicsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>[]
          }
          create: {
            args: Prisma.TopicsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          createMany: {
            args: Prisma.TopicsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TopicsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          update: {
            args: Prisma.TopicsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          deleteMany: {
            args: Prisma.TopicsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TopicsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicsPayload>
          }
          aggregate: {
            args: Prisma.TopicsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopics>
          }
          groupBy: {
            args: Prisma.TopicsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TopicsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TopicsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TopicsCountArgs<ExtArgs>
            result: $Utils.Optional<TopicsCountAggregateOutputType> | number
          }
        }
      }
      Questions: {
        payload: Prisma.$QuestionsPayload<ExtArgs>
        fields: Prisma.QuestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findFirst: {
            args: Prisma.QuestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          findMany: {
            args: Prisma.QuestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>[]
          }
          create: {
            args: Prisma.QuestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          createMany: {
            args: Prisma.QuestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          update: {
            args: Prisma.QuestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          deleteMany: {
            args: Prisma.QuestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionsPayload>
          }
          aggregate: {
            args: Prisma.QuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestions>
          }
          groupBy: {
            args: Prisma.QuestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuestionsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuestionsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuestionsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionsCountAggregateOutputType> | number
          }
        }
      }
      TestCase: {
        payload: Prisma.$TestCasePayload<ExtArgs>
        fields: Prisma.TestCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findFirst: {
            args: Prisma.TestCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findMany: {
            args: Prisma.TestCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          create: {
            args: Prisma.TestCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          createMany: {
            args: Prisma.TestCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          update: {
            args: Prisma.TestCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          deleteMany: {
            args: Prisma.TestCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          aggregate: {
            args: Prisma.TestCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCase>
          }
          groupBy: {
            args: Prisma.TestCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TestCaseFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TestCaseAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TestCaseCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubmissionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubmissionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Achievements: {
        payload: Prisma.$AchievementsPayload<ExtArgs>
        fields: Prisma.AchievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          findFirst: {
            args: Prisma.AchievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          findMany: {
            args: Prisma.AchievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>[]
          }
          create: {
            args: Prisma.AchievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          createMany: {
            args: Prisma.AchievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AchievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          update: {
            args: Prisma.AchievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          deleteMany: {
            args: Prisma.AchievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AchievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementsPayload>
          }
          aggregate: {
            args: Prisma.AchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievements>
          }
          groupBy: {
            args: Prisma.AchievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AchievementsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AchievementsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AchievementsCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementsCountAggregateOutputType> | number
          }
        }
      }
      StudentAchievements: {
        payload: Prisma.$StudentAchievementsPayload<ExtArgs>
        fields: Prisma.StudentAchievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAchievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAchievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload>
          }
          findFirst: {
            args: Prisma.StudentAchievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAchievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload>
          }
          findMany: {
            args: Prisma.StudentAchievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload>[]
          }
          create: {
            args: Prisma.StudentAchievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload>
          }
          createMany: {
            args: Prisma.StudentAchievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentAchievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload>
          }
          update: {
            args: Prisma.StudentAchievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload>
          }
          deleteMany: {
            args: Prisma.StudentAchievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAchievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentAchievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementsPayload>
          }
          aggregate: {
            args: Prisma.StudentAchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAchievements>
          }
          groupBy: {
            args: Prisma.StudentAchievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAchievementsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentAchievementsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAchievementsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentAchievementsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAchievementsCountAggregateOutputType> | number
          }
        }
      }
      OTPStudent: {
        payload: Prisma.$OTPStudentPayload<ExtArgs>
        fields: Prisma.OTPStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload>
          }
          findFirst: {
            args: Prisma.OTPStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload>
          }
          findMany: {
            args: Prisma.OTPStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload>[]
          }
          create: {
            args: Prisma.OTPStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload>
          }
          createMany: {
            args: Prisma.OTPStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OTPStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload>
          }
          update: {
            args: Prisma.OTPStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload>
          }
          deleteMany: {
            args: Prisma.OTPStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OTPStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPStudentPayload>
          }
          aggregate: {
            args: Prisma.OTPStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTPStudent>
          }
          groupBy: {
            args: Prisma.OTPStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPStudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OTPStudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OTPStudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OTPStudentCountArgs<ExtArgs>
            result: $Utils.Optional<OTPStudentCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Discussions: {
        payload: Prisma.$DiscussionsPayload<ExtArgs>
        fields: Prisma.DiscussionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload>
          }
          findFirst: {
            args: Prisma.DiscussionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload>
          }
          findMany: {
            args: Prisma.DiscussionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload>[]
          }
          create: {
            args: Prisma.DiscussionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload>
          }
          createMany: {
            args: Prisma.DiscussionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiscussionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload>
          }
          update: {
            args: Prisma.DiscussionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload>
          }
          deleteMany: {
            args: Prisma.DiscussionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiscussionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionsPayload>
          }
          aggregate: {
            args: Prisma.DiscussionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussions>
          }
          groupBy: {
            args: Prisma.DiscussionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DiscussionsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DiscussionsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DiscussionsCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionsCountAggregateOutputType> | number
          }
        }
      }
      Contest: {
        payload: Prisma.$ContestPayload<ExtArgs>
        fields: Prisma.ContestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findFirst: {
            args: Prisma.ContestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findMany: {
            args: Prisma.ContestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          create: {
            args: Prisma.ContestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          createMany: {
            args: Prisma.ContestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          update: {
            args: Prisma.ContestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          deleteMany: {
            args: Prisma.ContestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          aggregate: {
            args: Prisma.ContestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContest>
          }
          groupBy: {
            args: Prisma.ContestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContestCountArgs<ExtArgs>
            result: $Utils.Optional<ContestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    student?: StudentOmit
    topics?: TopicsOmit
    questions?: QuestionsOmit
    testCase?: TestCaseOmit
    submission?: SubmissionOmit
    achievements?: AchievementsOmit
    studentAchievements?: StudentAchievementsOmit
    oTPStudent?: OTPStudentOmit
    session?: SessionOmit
    discussions?: DiscussionsOmit
    contest?: ContestOmit
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    submission: number
    studentAchievements: number
    discussion: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | StudentCountOutputTypeCountSubmissionArgs
    studentAchievements?: boolean | StudentCountOutputTypeCountStudentAchievementsArgs
    discussion?: boolean | StudentCountOutputTypeCountDiscussionArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAchievementsWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountDiscussionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionsWhereInput
  }


  /**
   * Count Type TopicsCountOutputType
   */

  export type TopicsCountOutputType = {
    question: number
  }

  export type TopicsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | TopicsCountOutputTypeCountQuestionArgs
  }

  // Custom InputTypes
  /**
   * TopicsCountOutputType without action
   */
  export type TopicsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicsCountOutputType
     */
    select?: TopicsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicsCountOutputType without action
   */
  export type TopicsCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
  }


  /**
   * Count Type QuestionsCountOutputType
   */

  export type QuestionsCountOutputType = {
    testCase: number
    submission: number
    discussion: number
  }

  export type QuestionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCase?: boolean | QuestionsCountOutputTypeCountTestCaseArgs
    submission?: boolean | QuestionsCountOutputTypeCountSubmissionArgs
    discussion?: boolean | QuestionsCountOutputTypeCountDiscussionArgs
  }

  // Custom InputTypes
  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionsCountOutputType
     */
    select?: QuestionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountTestCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * QuestionsCountOutputType without action
   */
  export type QuestionsCountOutputTypeCountDiscussionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionsWhereInput
  }


  /**
   * Count Type AchievementsCountOutputType
   */

  export type AchievementsCountOutputType = {
    studentAchievements: number
  }

  export type AchievementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentAchievements?: boolean | AchievementsCountOutputTypeCountStudentAchievementsArgs
  }

  // Custom InputTypes
  /**
   * AchievementsCountOutputType without action
   */
  export type AchievementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementsCountOutputType
     */
    select?: AchievementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementsCountOutputType without action
   */
  export type AchievementsCountOutputTypeCountStudentAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAchievementsWhereInput
  }


  /**
   * Count Type DiscussionsCountOutputType
   */

  export type DiscussionsCountOutputType = {
    repliesIGet: number
  }

  export type DiscussionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repliesIGet?: boolean | DiscussionsCountOutputTypeCountRepliesIGetArgs
  }

  // Custom InputTypes
  /**
   * DiscussionsCountOutputType without action
   */
  export type DiscussionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscussionsCountOutputType
     */
    select?: DiscussionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscussionsCountOutputType without action
   */
  export type DiscussionsCountOutputTypeCountRepliesIGetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionsWhereInput
  }


  /**
   * Count Type ContestCountOutputType
   */

  export type ContestCountOutputType = {
    question: number
  }

  export type ContestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | ContestCountOutputTypeCountQuestionArgs
  }

  // Custom InputTypes
  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCountOutputType
     */
    select?: ContestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    rno: string | null
    uname: string | null
    leetCodeName: string | null
    salt: string | null
    hash: string | null
    timeOfLastSolve: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rno: string | null
    uname: string | null
    leetCodeName: string | null
    salt: string | null
    hash: string | null
    timeOfLastSolve: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    rno: number
    uname: number
    leetCodeName: number
    salt: number
    hash: number
    timeOfLastSolve: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    rno?: true
    uname?: true
    leetCodeName?: true
    salt?: true
    hash?: true
    timeOfLastSolve?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    rno?: true
    uname?: true
    leetCodeName?: true
    salt?: true
    hash?: true
    timeOfLastSolve?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    rno?: true
    uname?: true
    leetCodeName?: true
    salt?: true
    hash?: true
    timeOfLastSolve?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    rno: string
    uname: string
    leetCodeName: string | null
    salt: string
    hash: string
    timeOfLastSolve: Date | null
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rno?: boolean
    uname?: boolean
    leetCodeName?: boolean
    salt?: boolean
    hash?: boolean
    timeOfLastSolve?: boolean
    submission?: boolean | Student$submissionArgs<ExtArgs>
    studentAchievements?: boolean | Student$studentAchievementsArgs<ExtArgs>
    session?: boolean | Student$sessionArgs<ExtArgs>
    discussion?: boolean | Student$discussionArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    rno?: boolean
    uname?: boolean
    leetCodeName?: boolean
    salt?: boolean
    hash?: boolean
    timeOfLastSolve?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rno" | "uname" | "leetCodeName" | "salt" | "hash" | "timeOfLastSolve", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | Student$submissionArgs<ExtArgs>
    studentAchievements?: boolean | Student$studentAchievementsArgs<ExtArgs>
    session?: boolean | Student$sessionArgs<ExtArgs>
    discussion?: boolean | Student$discussionArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
      studentAchievements: Prisma.$StudentAchievementsPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs> | null
      discussion: Prisma.$DiscussionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rno: string
      uname: string
      leetCodeName: string | null
      salt: string
      hash: string
      timeOfLastSolve: Date | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Students that matches the filter.
     * @param {StudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const student = await prisma.student.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Student.
     * @param {StudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const student = await prisma.student.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends Student$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Student$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    studentAchievements<T extends Student$studentAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    session<T extends Student$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Student$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    discussion<T extends Student$discussionArgs<ExtArgs> = {}>(args?: Subset<T, Student$discussionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly rno: FieldRef<"Student", 'String'>
    readonly uname: FieldRef<"Student", 'String'>
    readonly leetCodeName: FieldRef<"Student", 'String'>
    readonly salt: FieldRef<"Student", 'String'>
    readonly hash: FieldRef<"Student", 'String'>
    readonly timeOfLastSolve: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }

  /**
   * Student findRaw
   */
  export type StudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student aggregateRaw
   */
  export type StudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student.submission
   */
  export type Student$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Student.studentAchievements
   */
  export type Student$studentAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    where?: StudentAchievementsWhereInput
    orderBy?: StudentAchievementsOrderByWithRelationInput | StudentAchievementsOrderByWithRelationInput[]
    cursor?: StudentAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAchievementsScalarFieldEnum | StudentAchievementsScalarFieldEnum[]
  }

  /**
   * Student.session
   */
  export type Student$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * Student.discussion
   */
  export type Student$discussionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    where?: DiscussionsWhereInput
    orderBy?: DiscussionsOrderByWithRelationInput | DiscussionsOrderByWithRelationInput[]
    cursor?: DiscussionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Topics
   */

  export type AggregateTopics = {
    _count: TopicsCountAggregateOutputType | null
    _min: TopicsMinAggregateOutputType | null
    _max: TopicsMaxAggregateOutputType | null
  }

  export type TopicsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    notes: string | null
  }

  export type TopicsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    notes: string | null
  }

  export type TopicsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    notes: number
    _all: number
  }


  export type TopicsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    notes?: true
  }

  export type TopicsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    notes?: true
  }

  export type TopicsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    notes?: true
    _all?: true
  }

  export type TopicsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to aggregate.
     */
    where?: TopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicsOrderByWithRelationInput | TopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicsMaxAggregateInputType
  }

  export type GetTopicsAggregateType<T extends TopicsAggregateArgs> = {
        [P in keyof T & keyof AggregateTopics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopics[P]>
      : GetScalarType<T[P], AggregateTopics[P]>
  }




  export type TopicsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicsWhereInput
    orderBy?: TopicsOrderByWithAggregationInput | TopicsOrderByWithAggregationInput[]
    by: TopicsScalarFieldEnum[] | TopicsScalarFieldEnum
    having?: TopicsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicsCountAggregateInputType | true
    _min?: TopicsMinAggregateInputType
    _max?: TopicsMaxAggregateInputType
  }

  export type TopicsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    notes: string | null
    _count: TopicsCountAggregateOutputType | null
    _min: TopicsMinAggregateOutputType | null
    _max: TopicsMaxAggregateOutputType | null
  }

  type GetTopicsGroupByPayload<T extends TopicsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicsGroupByOutputType[P]>
            : GetScalarType<T[P], TopicsGroupByOutputType[P]>
        }
      >
    >


  export type TopicsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    notes?: boolean
    question?: boolean | Topics$questionArgs<ExtArgs>
    _count?: boolean | TopicsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topics"]>



  export type TopicsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    notes?: boolean
  }

  export type TopicsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "notes", ExtArgs["result"]["topics"]>
  export type TopicsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | Topics$questionArgs<ExtArgs>
    _count?: boolean | TopicsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TopicsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topics"
    objects: {
      question: Prisma.$QuestionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      notes: string | null
    }, ExtArgs["result"]["topics"]>
    composites: {}
  }

  type TopicsGetPayload<S extends boolean | null | undefined | TopicsDefaultArgs> = $Result.GetResult<Prisma.$TopicsPayload, S>

  type TopicsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicsCountAggregateInputType | true
    }

  export interface TopicsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topics'], meta: { name: 'Topics' } }
    /**
     * Find zero or one Topics that matches the filter.
     * @param {TopicsFindUniqueArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicsFindUniqueArgs>(args: SelectSubset<T, TopicsFindUniqueArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Topics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicsFindUniqueOrThrowArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicsFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsFindFirstArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicsFindFirstArgs>(args?: SelectSubset<T, TopicsFindFirstArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Topics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsFindFirstOrThrowArgs} args - Arguments to find a Topics
     * @example
     * // Get one Topics
     * const topics = await prisma.topics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicsFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topics.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicsWithIdOnly = await prisma.topics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicsFindManyArgs>(args?: SelectSubset<T, TopicsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Topics.
     * @param {TopicsCreateArgs} args - Arguments to create a Topics.
     * @example
     * // Create one Topics
     * const Topics = await prisma.topics.create({
     *   data: {
     *     // ... data to create a Topics
     *   }
     * })
     * 
     */
    create<T extends TopicsCreateArgs>(args: SelectSubset<T, TopicsCreateArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Topics.
     * @param {TopicsCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topics = await prisma.topics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicsCreateManyArgs>(args?: SelectSubset<T, TopicsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Topics.
     * @param {TopicsDeleteArgs} args - Arguments to delete one Topics.
     * @example
     * // Delete one Topics
     * const Topics = await prisma.topics.delete({
     *   where: {
     *     // ... filter to delete one Topics
     *   }
     * })
     * 
     */
    delete<T extends TopicsDeleteArgs>(args: SelectSubset<T, TopicsDeleteArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Topics.
     * @param {TopicsUpdateArgs} args - Arguments to update one Topics.
     * @example
     * // Update one Topics
     * const topics = await prisma.topics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicsUpdateArgs>(args: SelectSubset<T, TopicsUpdateArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicsDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicsDeleteManyArgs>(args?: SelectSubset<T, TopicsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topics = await prisma.topics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicsUpdateManyArgs>(args: SelectSubset<T, TopicsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topics.
     * @param {TopicsUpsertArgs} args - Arguments to update or create a Topics.
     * @example
     * // Update or create a Topics
     * const topics = await prisma.topics.upsert({
     *   create: {
     *     // ... data to create a Topics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topics we want to update
     *   }
     * })
     */
    upsert<T extends TopicsUpsertArgs>(args: SelectSubset<T, TopicsUpsertArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * @param {TopicsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const topics = await prisma.topics.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TopicsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Topics.
     * @param {TopicsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const topics = await prisma.topics.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TopicsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topics.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicsCountArgs>(
      args?: Subset<T, TopicsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicsAggregateArgs>(args: Subset<T, TopicsAggregateArgs>): Prisma.PrismaPromise<GetTopicsAggregateType<T>>

    /**
     * Group by Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicsGroupByArgs} args - Group by arguments.
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
      T extends TopicsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicsGroupByArgs['orderBy'] }
        : { orderBy?: TopicsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TopicsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topics model
   */
  readonly fields: TopicsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends Topics$questionArgs<ExtArgs> = {}>(args?: Subset<T, Topics$questionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Topics model
   */ 
  interface TopicsFieldRefs {
    readonly id: FieldRef<"Topics", 'String'>
    readonly name: FieldRef<"Topics", 'String'>
    readonly description: FieldRef<"Topics", 'String'>
    readonly notes: FieldRef<"Topics", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Topics findUnique
   */
  export type TopicsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where: TopicsWhereUniqueInput
  }

  /**
   * Topics findUniqueOrThrow
   */
  export type TopicsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where: TopicsWhereUniqueInput
  }

  /**
   * Topics findFirst
   */
  export type TopicsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicsOrderByWithRelationInput | TopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * Topics findFirstOrThrow
   */
  export type TopicsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicsOrderByWithRelationInput | TopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * Topics findMany
   */
  export type TopicsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicsOrderByWithRelationInput | TopicsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicsScalarFieldEnum | TopicsScalarFieldEnum[]
  }

  /**
   * Topics create
   */
  export type TopicsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * The data needed to create a Topics.
     */
    data: XOR<TopicsCreateInput, TopicsUncheckedCreateInput>
  }

  /**
   * Topics createMany
   */
  export type TopicsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicsCreateManyInput | TopicsCreateManyInput[]
  }

  /**
   * Topics update
   */
  export type TopicsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * The data needed to update a Topics.
     */
    data: XOR<TopicsUpdateInput, TopicsUncheckedUpdateInput>
    /**
     * Choose, which Topics to update.
     */
    where: TopicsWhereUniqueInput
  }

  /**
   * Topics updateMany
   */
  export type TopicsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicsUpdateManyMutationInput, TopicsUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicsWhereInput
  }

  /**
   * Topics upsert
   */
  export type TopicsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * The filter to search for the Topics to update in case it exists.
     */
    where: TopicsWhereUniqueInput
    /**
     * In case the Topics found by the `where` argument doesn't exist, create a new Topics with this data.
     */
    create: XOR<TopicsCreateInput, TopicsUncheckedCreateInput>
    /**
     * In case the Topics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicsUpdateInput, TopicsUncheckedUpdateInput>
  }

  /**
   * Topics delete
   */
  export type TopicsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    /**
     * Filter which Topics to delete.
     */
    where: TopicsWhereUniqueInput
  }

  /**
   * Topics deleteMany
   */
  export type TopicsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicsWhereInput
  }

  /**
   * Topics findRaw
   */
  export type TopicsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Topics aggregateRaw
   */
  export type TopicsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Topics.question
   */
  export type Topics$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    cursor?: QuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Topics without action
   */
  export type TopicsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
  }


  /**
   * Model Questions
   */

  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsAvgAggregateOutputType = {
    noOfHiddenTestCases: number | null
    noOfExternalTestCases: number | null
    pointsPerTestCaseSolved: number | null
    timeToSolveInMinutes: number | null
  }

  export type QuestionsSumAggregateOutputType = {
    noOfHiddenTestCases: number | null
    noOfExternalTestCases: number | null
    pointsPerTestCaseSolved: number | null
    timeToSolveInMinutes: number | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    miniDescription: string | null
    topicId: string | null
    noOfHiddenTestCases: number | null
    noOfExternalTestCases: number | null
    difficulty: string | null
    pointsPerTestCaseSolved: number | null
    type: string | null
    leetCodeLink: string | null
    leetCodeTitle: string | null
    timeToSolveInMinutes: number | null
    contestId: string | null
    JavaImports: string | null
    JavaBoilerCode: string | null
    CBoilerCode: string | null
    CppBoilerCode: string | null
    PythonBoilerCode: string | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    miniDescription: string | null
    topicId: string | null
    noOfHiddenTestCases: number | null
    noOfExternalTestCases: number | null
    difficulty: string | null
    pointsPerTestCaseSolved: number | null
    type: string | null
    leetCodeLink: string | null
    leetCodeTitle: string | null
    timeToSolveInMinutes: number | null
    contestId: string | null
    JavaImports: string | null
    JavaBoilerCode: string | null
    CBoilerCode: string | null
    CppBoilerCode: string | null
    PythonBoilerCode: string | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    miniDescription: number
    topicId: number
    noOfHiddenTestCases: number
    noOfExternalTestCases: number
    difficulty: number
    pointsPerTestCaseSolved: number
    type: number
    leetCodeLink: number
    leetCodeTitle: number
    timeToSolveInMinutes: number
    contestId: number
    JavaImports: number
    JavaBoilerCode: number
    CBoilerCode: number
    CppBoilerCode: number
    PythonBoilerCode: number
    _all: number
  }


  export type QuestionsAvgAggregateInputType = {
    noOfHiddenTestCases?: true
    noOfExternalTestCases?: true
    pointsPerTestCaseSolved?: true
    timeToSolveInMinutes?: true
  }

  export type QuestionsSumAggregateInputType = {
    noOfHiddenTestCases?: true
    noOfExternalTestCases?: true
    pointsPerTestCaseSolved?: true
    timeToSolveInMinutes?: true
  }

  export type QuestionsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    miniDescription?: true
    topicId?: true
    noOfHiddenTestCases?: true
    noOfExternalTestCases?: true
    difficulty?: true
    pointsPerTestCaseSolved?: true
    type?: true
    leetCodeLink?: true
    leetCodeTitle?: true
    timeToSolveInMinutes?: true
    contestId?: true
    JavaImports?: true
    JavaBoilerCode?: true
    CBoilerCode?: true
    CppBoilerCode?: true
    PythonBoilerCode?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    miniDescription?: true
    topicId?: true
    noOfHiddenTestCases?: true
    noOfExternalTestCases?: true
    difficulty?: true
    pointsPerTestCaseSolved?: true
    type?: true
    leetCodeLink?: true
    leetCodeTitle?: true
    timeToSolveInMinutes?: true
    contestId?: true
    JavaImports?: true
    JavaBoilerCode?: true
    CBoilerCode?: true
    CppBoilerCode?: true
    PythonBoilerCode?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    miniDescription?: true
    topicId?: true
    noOfHiddenTestCases?: true
    noOfExternalTestCases?: true
    difficulty?: true
    pointsPerTestCaseSolved?: true
    type?: true
    leetCodeLink?: true
    leetCodeTitle?: true
    timeToSolveInMinutes?: true
    contestId?: true
    JavaImports?: true
    JavaBoilerCode?: true
    CBoilerCode?: true
    CppBoilerCode?: true
    PythonBoilerCode?: true
    _all?: true
  }

  export type QuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to aggregate.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }




  export type QuestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithAggregationInput | QuestionsOrderByWithAggregationInput[]
    by: QuestionsScalarFieldEnum[] | QuestionsScalarFieldEnum
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _avg?: QuestionsAvgAggregateInputType
    _sum?: QuestionsSumAggregateInputType
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }

  export type QuestionsGroupByOutputType = {
    id: string
    title: string
    description: string
    miniDescription: string | null
    topicId: string | null
    noOfHiddenTestCases: number
    noOfExternalTestCases: number
    difficulty: string
    pointsPerTestCaseSolved: number
    type: string
    leetCodeLink: string | null
    leetCodeTitle: string | null
    timeToSolveInMinutes: number | null
    contestId: string | null
    JavaImports: string
    JavaBoilerCode: string
    CBoilerCode: string
    CppBoilerCode: string
    PythonBoilerCode: string
    _count: QuestionsCountAggregateOutputType | null
    _avg: QuestionsAvgAggregateOutputType | null
    _sum: QuestionsSumAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      >
    >


  export type QuestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    miniDescription?: boolean
    topicId?: boolean
    noOfHiddenTestCases?: boolean
    noOfExternalTestCases?: boolean
    difficulty?: boolean
    pointsPerTestCaseSolved?: boolean
    type?: boolean
    leetCodeLink?: boolean
    leetCodeTitle?: boolean
    timeToSolveInMinutes?: boolean
    contestId?: boolean
    JavaImports?: boolean
    JavaBoilerCode?: boolean
    CBoilerCode?: boolean
    CppBoilerCode?: boolean
    PythonBoilerCode?: boolean
    testCase?: boolean | Questions$testCaseArgs<ExtArgs>
    submission?: boolean | Questions$submissionArgs<ExtArgs>
    discussion?: boolean | Questions$discussionArgs<ExtArgs>
    topics?: boolean | Questions$topicsArgs<ExtArgs>
    contest?: boolean | Questions$contestArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questions"]>



  export type QuestionsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    miniDescription?: boolean
    topicId?: boolean
    noOfHiddenTestCases?: boolean
    noOfExternalTestCases?: boolean
    difficulty?: boolean
    pointsPerTestCaseSolved?: boolean
    type?: boolean
    leetCodeLink?: boolean
    leetCodeTitle?: boolean
    timeToSolveInMinutes?: boolean
    contestId?: boolean
    JavaImports?: boolean
    JavaBoilerCode?: boolean
    CBoilerCode?: boolean
    CppBoilerCode?: boolean
    PythonBoilerCode?: boolean
  }

  export type QuestionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "miniDescription" | "topicId" | "noOfHiddenTestCases" | "noOfExternalTestCases" | "difficulty" | "pointsPerTestCaseSolved" | "type" | "leetCodeLink" | "leetCodeTitle" | "timeToSolveInMinutes" | "contestId" | "JavaImports" | "JavaBoilerCode" | "CBoilerCode" | "CppBoilerCode" | "PythonBoilerCode", ExtArgs["result"]["questions"]>
  export type QuestionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCase?: boolean | Questions$testCaseArgs<ExtArgs>
    submission?: boolean | Questions$submissionArgs<ExtArgs>
    discussion?: boolean | Questions$discussionArgs<ExtArgs>
    topics?: boolean | Questions$topicsArgs<ExtArgs>
    contest?: boolean | Questions$contestArgs<ExtArgs>
    _count?: boolean | QuestionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questions"
    objects: {
      testCase: Prisma.$TestCasePayload<ExtArgs>[]
      submission: Prisma.$SubmissionPayload<ExtArgs>[]
      discussion: Prisma.$DiscussionsPayload<ExtArgs>[]
      topics: Prisma.$TopicsPayload<ExtArgs> | null
      contest: Prisma.$ContestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      miniDescription: string | null
      topicId: string | null
      noOfHiddenTestCases: number
      noOfExternalTestCases: number
      difficulty: string
      pointsPerTestCaseSolved: number
      type: string
      leetCodeLink: string | null
      leetCodeTitle: string | null
      timeToSolveInMinutes: number | null
      contestId: string | null
      JavaImports: string
      JavaBoilerCode: string
      CBoilerCode: string
      CppBoilerCode: string
      PythonBoilerCode: string
    }, ExtArgs["result"]["questions"]>
    composites: {}
  }

  type QuestionsGetPayload<S extends boolean | null | undefined | QuestionsDefaultArgs> = $Result.GetResult<Prisma.$QuestionsPayload, S>

  type QuestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionsCountAggregateInputType | true
    }

  export interface QuestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questions'], meta: { name: 'Questions' } }
    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionsFindUniqueArgs>(args: SelectSubset<T, QuestionsFindUniqueArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Questions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionsFindUniqueOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionsFindFirstArgs>(args?: SelectSubset<T, QuestionsFindFirstArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Questions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstOrThrowArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionsFindManyArgs>(args?: SelectSubset<T, QuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
     */
    create<T extends QuestionsCreateArgs>(args: SelectSubset<T, QuestionsCreateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Questions.
     * @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const questions = await prisma.questions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionsCreateManyArgs>(args?: SelectSubset<T, QuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
     */
    delete<T extends QuestionsDeleteArgs>(args: SelectSubset<T, QuestionsDeleteArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionsUpdateArgs>(args: SelectSubset<T, QuestionsUpdateArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionsDeleteManyArgs>(args?: SelectSubset<T, QuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionsUpdateManyArgs>(args: SelectSubset<T, QuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
     */
    upsert<T extends QuestionsUpsertArgs>(args: SelectSubset<T, QuestionsUpsertArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * @param {QuestionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const questions = await prisma.questions.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuestionsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Questions.
     * @param {QuestionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const questions = await prisma.questions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuestionsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): Prisma.PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
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
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questions model
   */
  readonly fields: QuestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testCase<T extends Questions$testCaseArgs<ExtArgs> = {}>(args?: Subset<T, Questions$testCaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    submission<T extends Questions$submissionArgs<ExtArgs> = {}>(args?: Subset<T, Questions$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    discussion<T extends Questions$discussionArgs<ExtArgs> = {}>(args?: Subset<T, Questions$discussionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    topics<T extends Questions$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Questions$topicsArgs<ExtArgs>>): Prisma__TopicsClient<$Result.GetResult<Prisma.$TopicsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    contest<T extends Questions$contestArgs<ExtArgs> = {}>(args?: Subset<T, Questions$contestArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Questions model
   */ 
  interface QuestionsFieldRefs {
    readonly id: FieldRef<"Questions", 'String'>
    readonly title: FieldRef<"Questions", 'String'>
    readonly description: FieldRef<"Questions", 'String'>
    readonly miniDescription: FieldRef<"Questions", 'String'>
    readonly topicId: FieldRef<"Questions", 'String'>
    readonly noOfHiddenTestCases: FieldRef<"Questions", 'Int'>
    readonly noOfExternalTestCases: FieldRef<"Questions", 'Int'>
    readonly difficulty: FieldRef<"Questions", 'String'>
    readonly pointsPerTestCaseSolved: FieldRef<"Questions", 'Int'>
    readonly type: FieldRef<"Questions", 'String'>
    readonly leetCodeLink: FieldRef<"Questions", 'String'>
    readonly leetCodeTitle: FieldRef<"Questions", 'String'>
    readonly timeToSolveInMinutes: FieldRef<"Questions", 'Int'>
    readonly contestId: FieldRef<"Questions", 'String'>
    readonly JavaImports: FieldRef<"Questions", 'String'>
    readonly JavaBoilerCode: FieldRef<"Questions", 'String'>
    readonly CBoilerCode: FieldRef<"Questions", 'String'>
    readonly CppBoilerCode: FieldRef<"Questions", 'String'>
    readonly PythonBoilerCode: FieldRef<"Questions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Questions findUnique
   */
  export type QuestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findUniqueOrThrow
   */
  export type QuestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions findFirst
   */
  export type QuestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findFirstOrThrow
   */
  export type QuestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Questions create
   */
  export type QuestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Questions.
     */
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }

  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionsCreateManyInput | QuestionsCreateManyInput[]
  }

  /**
   * Questions update
   */
  export type QuestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Questions.
     */
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionsWhereInput
  }

  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Questions to update in case it exists.
     */
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     */
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }

  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    /**
     * Filter which Questions to delete.
     */
    where: QuestionsWhereUniqueInput
  }

  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionsWhereInput
  }

  /**
   * Questions findRaw
   */
  export type QuestionsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Questions aggregateRaw
   */
  export type QuestionsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Questions.testCase
   */
  export type Questions$testCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    cursor?: TestCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * Questions.submission
   */
  export type Questions$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Questions.discussion
   */
  export type Questions$discussionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    where?: DiscussionsWhereInput
    orderBy?: DiscussionsOrderByWithRelationInput | DiscussionsOrderByWithRelationInput[]
    cursor?: DiscussionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * Questions.topics
   */
  export type Questions$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topics
     */
    select?: TopicsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topics
     */
    omit?: TopicsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicsInclude<ExtArgs> | null
    where?: TopicsWhereInput
  }

  /**
   * Questions.contest
   */
  export type Questions$contestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    where?: ContestWhereInput
  }

  /**
   * Questions without action
   */
  export type QuestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
  }


  /**
   * Model TestCase
   */

  export type AggregateTestCase = {
    _count: TestCaseCountAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  export type TestCaseMinAggregateOutputType = {
    id: string | null
    inputString: string | null
    outputString: string | null
    questionId: string | null
    type: string | null
  }

  export type TestCaseMaxAggregateOutputType = {
    id: string | null
    inputString: string | null
    outputString: string | null
    questionId: string | null
    type: string | null
  }

  export type TestCaseCountAggregateOutputType = {
    id: number
    inputString: number
    outputString: number
    questionId: number
    type: number
    _all: number
  }


  export type TestCaseMinAggregateInputType = {
    id?: true
    inputString?: true
    outputString?: true
    questionId?: true
    type?: true
  }

  export type TestCaseMaxAggregateInputType = {
    id?: true
    inputString?: true
    outputString?: true
    questionId?: true
    type?: true
  }

  export type TestCaseCountAggregateInputType = {
    id?: true
    inputString?: true
    outputString?: true
    questionId?: true
    type?: true
    _all?: true
  }

  export type TestCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCase to aggregate.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCases
    **/
    _count?: true | TestCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseMaxAggregateInputType
  }

  export type GetTestCaseAggregateType<T extends TestCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCase[P]>
      : GetScalarType<T[P], AggregateTestCase[P]>
  }




  export type TestCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithAggregationInput | TestCaseOrderByWithAggregationInput[]
    by: TestCaseScalarFieldEnum[] | TestCaseScalarFieldEnum
    having?: TestCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseCountAggregateInputType | true
    _min?: TestCaseMinAggregateInputType
    _max?: TestCaseMaxAggregateInputType
  }

  export type TestCaseGroupByOutputType = {
    id: string
    inputString: string
    outputString: string
    questionId: string
    type: string
    _count: TestCaseCountAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  type GetTestCaseGroupByPayload<T extends TestCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputString?: boolean
    outputString?: boolean
    questionId?: boolean
    type?: boolean
    questions?: boolean | QuestionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>



  export type TestCaseSelectScalar = {
    id?: boolean
    inputString?: boolean
    outputString?: boolean
    questionId?: boolean
    type?: boolean
  }

  export type TestCaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inputString" | "outputString" | "questionId" | "type", ExtArgs["result"]["testCase"]>
  export type TestCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuestionsDefaultArgs<ExtArgs>
  }

  export type $TestCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCase"
    objects: {
      questions: Prisma.$QuestionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inputString: string
      outputString: string
      questionId: string
      type: string
    }, ExtArgs["result"]["testCase"]>
    composites: {}
  }

  type TestCaseGetPayload<S extends boolean | null | undefined | TestCaseDefaultArgs> = $Result.GetResult<Prisma.$TestCasePayload, S>

  type TestCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCaseCountAggregateInputType | true
    }

  export interface TestCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCase'], meta: { name: 'TestCase' } }
    /**
     * Find zero or one TestCase that matches the filter.
     * @param {TestCaseFindUniqueArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseFindUniqueArgs>(args: SelectSubset<T, TestCaseFindUniqueArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TestCase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCaseFindUniqueOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TestCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseFindFirstArgs>(args?: SelectSubset<T, TestCaseFindFirstArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TestCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCases
     * const testCases = await prisma.testCase.findMany()
     * 
     * // Get first 10 TestCases
     * const testCases = await prisma.testCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseWithIdOnly = await prisma.testCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseFindManyArgs>(args?: SelectSubset<T, TestCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TestCase.
     * @param {TestCaseCreateArgs} args - Arguments to create a TestCase.
     * @example
     * // Create one TestCase
     * const TestCase = await prisma.testCase.create({
     *   data: {
     *     // ... data to create a TestCase
     *   }
     * })
     * 
     */
    create<T extends TestCaseCreateArgs>(args: SelectSubset<T, TestCaseCreateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TestCases.
     * @param {TestCaseCreateManyArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseCreateManyArgs>(args?: SelectSubset<T, TestCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestCase.
     * @param {TestCaseDeleteArgs} args - Arguments to delete one TestCase.
     * @example
     * // Delete one TestCase
     * const TestCase = await prisma.testCase.delete({
     *   where: {
     *     // ... filter to delete one TestCase
     *   }
     * })
     * 
     */
    delete<T extends TestCaseDeleteArgs>(args: SelectSubset<T, TestCaseDeleteArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TestCase.
     * @param {TestCaseUpdateArgs} args - Arguments to update one TestCase.
     * @example
     * // Update one TestCase
     * const testCase = await prisma.testCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseUpdateArgs>(args: SelectSubset<T, TestCaseUpdateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TestCases.
     * @param {TestCaseDeleteManyArgs} args - Arguments to filter TestCases to delete.
     * @example
     * // Delete a few TestCases
     * const { count } = await prisma.testCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseDeleteManyArgs>(args?: SelectSubset<T, TestCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseUpdateManyArgs>(args: SelectSubset<T, TestCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestCase.
     * @param {TestCaseUpsertArgs} args - Arguments to update or create a TestCase.
     * @example
     * // Update or create a TestCase
     * const testCase = await prisma.testCase.upsert({
     *   create: {
     *     // ... data to create a TestCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCase we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseUpsertArgs>(args: SelectSubset<T, TestCaseUpsertArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TestCases that matches the filter.
     * @param {TestCaseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const testCase = await prisma.testCase.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TestCaseFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TestCase.
     * @param {TestCaseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const testCase = await prisma.testCase.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TestCaseAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseCountArgs} args - Arguments to filter TestCases to count.
     * @example
     * // Count the number of TestCases
     * const count = await prisma.testCase.count({
     *   where: {
     *     // ... the filter for the TestCases we want to count
     *   }
     * })
    **/
    count<T extends TestCaseCountArgs>(
      args?: Subset<T, TestCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestCaseAggregateArgs>(args: Subset<T, TestCaseAggregateArgs>): Prisma.PrismaPromise<GetTestCaseAggregateType<T>>

    /**
     * Group by TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseGroupByArgs} args - Group by arguments.
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
      T extends TestCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCase model
   */
  readonly fields: TestCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends QuestionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionsDefaultArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the TestCase model
   */ 
  interface TestCaseFieldRefs {
    readonly id: FieldRef<"TestCase", 'String'>
    readonly inputString: FieldRef<"TestCase", 'String'>
    readonly outputString: FieldRef<"TestCase", 'String'>
    readonly questionId: FieldRef<"TestCase", 'String'>
    readonly type: FieldRef<"TestCase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestCase findUnique
   */
  export type TestCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findUniqueOrThrow
   */
  export type TestCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findFirst
   */
  export type TestCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findFirstOrThrow
   */
  export type TestCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findMany
   */
  export type TestCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase create
   */
  export type TestCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCase.
     */
    data: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
  }

  /**
   * TestCase createMany
   */
  export type TestCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
  }

  /**
   * TestCase update
   */
  export type TestCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCase.
     */
    data: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
    /**
     * Choose, which TestCase to update.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase updateMany
   */
  export type TestCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput
  }

  /**
   * TestCase upsert
   */
  export type TestCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCase to update in case it exists.
     */
    where: TestCaseWhereUniqueInput
    /**
     * In case the TestCase found by the `where` argument doesn't exist, create a new TestCase with this data.
     */
    create: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
    /**
     * In case the TestCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
  }

  /**
   * TestCase delete
   */
  export type TestCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter which TestCase to delete.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase deleteMany
   */
  export type TestCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCases to delete
     */
    where?: TestCaseWhereInput
  }

  /**
   * TestCase findRaw
   */
  export type TestCaseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TestCase aggregateRaw
   */
  export type TestCaseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TestCase without action
   */
  export type TestCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    noOfCasesPassed: number | null
    pointsSecured: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    noOfCasesPassed: number | null
    pointsSecured: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    studentId: string | null
    startTime: Date | null
    maxTimeToSolve: Date | null
    submittedOn: Date | null
    status: string | null
    noOfCasesPassed: number | null
    pointsSecured: number | null
    type: string | null
    output1: string | null
    output2: string | null
    isFinal: string | null
    code: string | null
    leetCodeLink: string | null
    language: string | null
    savedCCode: string | null
    savedCppCode: string | null
    savedJavaCode: string | null
    savedPythonCode: string | null
    failedForInput: string | null
    isChecked: string | null
    output1Status: string | null
    output2Status: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    studentId: string | null
    startTime: Date | null
    maxTimeToSolve: Date | null
    submittedOn: Date | null
    status: string | null
    noOfCasesPassed: number | null
    pointsSecured: number | null
    type: string | null
    output1: string | null
    output2: string | null
    isFinal: string | null
    code: string | null
    leetCodeLink: string | null
    language: string | null
    savedCCode: string | null
    savedCppCode: string | null
    savedJavaCode: string | null
    savedPythonCode: string | null
    failedForInput: string | null
    isChecked: string | null
    output1Status: string | null
    output2Status: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    questionId: number
    studentId: number
    startTime: number
    maxTimeToSolve: number
    submittedOn: number
    status: number
    noOfCasesPassed: number
    pointsSecured: number
    type: number
    output1: number
    output2: number
    isFinal: number
    code: number
    leetCodeLink: number
    language: number
    savedCCode: number
    savedCppCode: number
    savedJavaCode: number
    savedPythonCode: number
    failedForInput: number
    isChecked: number
    output1Status: number
    output2Status: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    noOfCasesPassed?: true
    pointsSecured?: true
  }

  export type SubmissionSumAggregateInputType = {
    noOfCasesPassed?: true
    pointsSecured?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    questionId?: true
    studentId?: true
    startTime?: true
    maxTimeToSolve?: true
    submittedOn?: true
    status?: true
    noOfCasesPassed?: true
    pointsSecured?: true
    type?: true
    output1?: true
    output2?: true
    isFinal?: true
    code?: true
    leetCodeLink?: true
    language?: true
    savedCCode?: true
    savedCppCode?: true
    savedJavaCode?: true
    savedPythonCode?: true
    failedForInput?: true
    isChecked?: true
    output1Status?: true
    output2Status?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    questionId?: true
    studentId?: true
    startTime?: true
    maxTimeToSolve?: true
    submittedOn?: true
    status?: true
    noOfCasesPassed?: true
    pointsSecured?: true
    type?: true
    output1?: true
    output2?: true
    isFinal?: true
    code?: true
    leetCodeLink?: true
    language?: true
    savedCCode?: true
    savedCppCode?: true
    savedJavaCode?: true
    savedPythonCode?: true
    failedForInput?: true
    isChecked?: true
    output1Status?: true
    output2Status?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    questionId?: true
    studentId?: true
    startTime?: true
    maxTimeToSolve?: true
    submittedOn?: true
    status?: true
    noOfCasesPassed?: true
    pointsSecured?: true
    type?: true
    output1?: true
    output2?: true
    isFinal?: true
    code?: true
    leetCodeLink?: true
    language?: true
    savedCCode?: true
    savedCppCode?: true
    savedJavaCode?: true
    savedPythonCode?: true
    failedForInput?: true
    isChecked?: true
    output1Status?: true
    output2Status?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    questionId: string
    studentId: string
    startTime: Date
    maxTimeToSolve: Date
    submittedOn: Date | null
    status: string
    noOfCasesPassed: number
    pointsSecured: number
    type: string
    output1: string | null
    output2: string | null
    isFinal: string
    code: string | null
    leetCodeLink: string | null
    language: string | null
    savedCCode: string
    savedCppCode: string
    savedJavaCode: string
    savedPythonCode: string
    failedForInput: string | null
    isChecked: string
    output1Status: string
    output2Status: string
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    studentId?: boolean
    startTime?: boolean
    maxTimeToSolve?: boolean
    submittedOn?: boolean
    status?: boolean
    noOfCasesPassed?: boolean
    pointsSecured?: boolean
    type?: boolean
    output1?: boolean
    output2?: boolean
    isFinal?: boolean
    code?: boolean
    leetCodeLink?: boolean
    language?: boolean
    savedCCode?: boolean
    savedCppCode?: boolean
    savedJavaCode?: boolean
    savedPythonCode?: boolean
    failedForInput?: boolean
    isChecked?: boolean
    output1Status?: boolean
    output2Status?: boolean
    questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>



  export type SubmissionSelectScalar = {
    id?: boolean
    questionId?: boolean
    studentId?: boolean
    startTime?: boolean
    maxTimeToSolve?: boolean
    submittedOn?: boolean
    status?: boolean
    noOfCasesPassed?: boolean
    pointsSecured?: boolean
    type?: boolean
    output1?: boolean
    output2?: boolean
    isFinal?: boolean
    code?: boolean
    leetCodeLink?: boolean
    language?: boolean
    savedCCode?: boolean
    savedCppCode?: boolean
    savedJavaCode?: boolean
    savedPythonCode?: boolean
    failedForInput?: boolean
    isChecked?: boolean
    output1Status?: boolean
    output2Status?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "studentId" | "startTime" | "maxTimeToSolve" | "submittedOn" | "status" | "noOfCasesPassed" | "pointsSecured" | "type" | "output1" | "output2" | "isFinal" | "code" | "leetCodeLink" | "language" | "savedCCode" | "savedCppCode" | "savedJavaCode" | "savedPythonCode" | "failedForInput" | "isChecked" | "output1Status" | "output2Status", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuestionsDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      questions: Prisma.$QuestionsPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      studentId: string
      startTime: Date
      maxTimeToSolve: Date
      submittedOn: Date | null
      status: string
      noOfCasesPassed: number
      pointsSecured: number
      type: string
      output1: string | null
      output2: string | null
      isFinal: string
      code: string | null
      leetCodeLink: string | null
      language: string | null
      savedCCode: string
      savedCppCode: string
      savedJavaCode: string
      savedPythonCode: string
      failedForInput: string | null
      isChecked: string
      output1Status: string
      output2Status: string
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * @param {SubmissionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const submission = await prisma.submission.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubmissionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Submission.
     * @param {SubmissionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const submission = await prisma.submission.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubmissionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends QuestionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionsDefaultArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Submission model
   */ 
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly questionId: FieldRef<"Submission", 'String'>
    readonly studentId: FieldRef<"Submission", 'String'>
    readonly startTime: FieldRef<"Submission", 'DateTime'>
    readonly maxTimeToSolve: FieldRef<"Submission", 'DateTime'>
    readonly submittedOn: FieldRef<"Submission", 'DateTime'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly noOfCasesPassed: FieldRef<"Submission", 'Int'>
    readonly pointsSecured: FieldRef<"Submission", 'Int'>
    readonly type: FieldRef<"Submission", 'String'>
    readonly output1: FieldRef<"Submission", 'String'>
    readonly output2: FieldRef<"Submission", 'String'>
    readonly isFinal: FieldRef<"Submission", 'String'>
    readonly code: FieldRef<"Submission", 'String'>
    readonly leetCodeLink: FieldRef<"Submission", 'String'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly savedCCode: FieldRef<"Submission", 'String'>
    readonly savedCppCode: FieldRef<"Submission", 'String'>
    readonly savedJavaCode: FieldRef<"Submission", 'String'>
    readonly savedPythonCode: FieldRef<"Submission", 'String'>
    readonly failedForInput: FieldRef<"Submission", 'String'>
    readonly isChecked: FieldRef<"Submission", 'String'>
    readonly output1Status: FieldRef<"Submission", 'String'>
    readonly output2Status: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
  }

  /**
   * Submission findRaw
   */
  export type SubmissionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Submission aggregateRaw
   */
  export type SubmissionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Achievements
   */

  export type AggregateAchievements = {
    _count: AchievementsCountAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  export type AchievementsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
  }

  export type AchievementsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
  }

  export type AchievementsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    _all: number
  }


  export type AchievementsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type AchievementsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type AchievementsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    _all?: true
  }

  export type AchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to aggregate.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementsMaxAggregateInputType
  }

  export type GetAchievementsAggregateType<T extends AchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievements[P]>
      : GetScalarType<T[P], AggregateAchievements[P]>
  }




  export type AchievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementsWhereInput
    orderBy?: AchievementsOrderByWithAggregationInput | AchievementsOrderByWithAggregationInput[]
    by: AchievementsScalarFieldEnum[] | AchievementsScalarFieldEnum
    having?: AchievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementsCountAggregateInputType | true
    _min?: AchievementsMinAggregateInputType
    _max?: AchievementsMaxAggregateInputType
  }

  export type AchievementsGroupByOutputType = {
    id: string
    title: string
    description: string | null
    _count: AchievementsCountAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  type GetAchievementsGroupByPayload<T extends AchievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
        }
      >
    >


  export type AchievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    studentAchievements?: boolean | Achievements$studentAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>



  export type AchievementsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
  }

  export type AchievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description", ExtArgs["result"]["achievements"]>
  export type AchievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentAchievements?: boolean | Achievements$studentAchievementsArgs<ExtArgs>
    _count?: boolean | AchievementsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AchievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievements"
    objects: {
      studentAchievements: Prisma.$StudentAchievementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
    }, ExtArgs["result"]["achievements"]>
    composites: {}
  }

  type AchievementsGetPayload<S extends boolean | null | undefined | AchievementsDefaultArgs> = $Result.GetResult<Prisma.$AchievementsPayload, S>

  type AchievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementsCountAggregateInputType | true
    }

  export interface AchievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievements'], meta: { name: 'Achievements' } }
    /**
     * Find zero or one Achievements that matches the filter.
     * @param {AchievementsFindUniqueArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementsFindUniqueArgs>(args: SelectSubset<T, AchievementsFindUniqueArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Achievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementsFindUniqueOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindFirstArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementsFindFirstArgs>(args?: SelectSubset<T, AchievementsFindFirstArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Achievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindFirstOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievements.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementsWithIdOnly = await prisma.achievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementsFindManyArgs>(args?: SelectSubset<T, AchievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Achievements.
     * @param {AchievementsCreateArgs} args - Arguments to create a Achievements.
     * @example
     * // Create one Achievements
     * const Achievements = await prisma.achievements.create({
     *   data: {
     *     // ... data to create a Achievements
     *   }
     * })
     * 
     */
    create<T extends AchievementsCreateArgs>(args: SelectSubset<T, AchievementsCreateArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Achievements.
     * @param {AchievementsCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementsCreateManyArgs>(args?: SelectSubset<T, AchievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Achievements.
     * @param {AchievementsDeleteArgs} args - Arguments to delete one Achievements.
     * @example
     * // Delete one Achievements
     * const Achievements = await prisma.achievements.delete({
     *   where: {
     *     // ... filter to delete one Achievements
     *   }
     * })
     * 
     */
    delete<T extends AchievementsDeleteArgs>(args: SelectSubset<T, AchievementsDeleteArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Achievements.
     * @param {AchievementsUpdateArgs} args - Arguments to update one Achievements.
     * @example
     * // Update one Achievements
     * const achievements = await prisma.achievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementsUpdateArgs>(args: SelectSubset<T, AchievementsUpdateArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementsDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementsDeleteManyArgs>(args?: SelectSubset<T, AchievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementsUpdateManyArgs>(args: SelectSubset<T, AchievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Achievements.
     * @param {AchievementsUpsertArgs} args - Arguments to update or create a Achievements.
     * @example
     * // Update or create a Achievements
     * const achievements = await prisma.achievements.upsert({
     *   create: {
     *     // ... data to create a Achievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievements we want to update
     *   }
     * })
     */
    upsert<T extends AchievementsUpsertArgs>(args: SelectSubset<T, AchievementsUpsertArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * @param {AchievementsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const achievements = await prisma.achievements.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AchievementsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Achievements.
     * @param {AchievementsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const achievements = await prisma.achievements.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AchievementsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievements.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementsCountArgs>(
      args?: Subset<T, AchievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementsAggregateArgs>(args: Subset<T, AchievementsAggregateArgs>): Prisma.PrismaPromise<GetAchievementsAggregateType<T>>

    /**
     * Group by Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsGroupByArgs} args - Group by arguments.
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
      T extends AchievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementsGroupByArgs['orderBy'] }
        : { orderBy?: AchievementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievements model
   */
  readonly fields: AchievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentAchievements<T extends Achievements$studentAchievementsArgs<ExtArgs> = {}>(args?: Subset<T, Achievements$studentAchievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Achievements model
   */ 
  interface AchievementsFieldRefs {
    readonly id: FieldRef<"Achievements", 'String'>
    readonly title: FieldRef<"Achievements", 'String'>
    readonly description: FieldRef<"Achievements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Achievements findUnique
   */
  export type AchievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements findUniqueOrThrow
   */
  export type AchievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements findFirst
   */
  export type AchievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements findFirstOrThrow
   */
  export type AchievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements findMany
   */
  export type AchievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementsOrderByWithRelationInput | AchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * Achievements create
   */
  export type AchievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievements.
     */
    data: XOR<AchievementsCreateInput, AchievementsUncheckedCreateInput>
  }

  /**
   * Achievements createMany
   */
  export type AchievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementsCreateManyInput | AchievementsCreateManyInput[]
  }

  /**
   * Achievements update
   */
  export type AchievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievements.
     */
    data: XOR<AchievementsUpdateInput, AchievementsUncheckedUpdateInput>
    /**
     * Choose, which Achievements to update.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements updateMany
   */
  export type AchievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementsUpdateManyMutationInput, AchievementsUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementsWhereInput
  }

  /**
   * Achievements upsert
   */
  export type AchievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievements to update in case it exists.
     */
    where: AchievementsWhereUniqueInput
    /**
     * In case the Achievements found by the `where` argument doesn't exist, create a new Achievements with this data.
     */
    create: XOR<AchievementsCreateInput, AchievementsUncheckedCreateInput>
    /**
     * In case the Achievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementsUpdateInput, AchievementsUncheckedUpdateInput>
  }

  /**
   * Achievements delete
   */
  export type AchievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
    /**
     * Filter which Achievements to delete.
     */
    where: AchievementsWhereUniqueInput
  }

  /**
   * Achievements deleteMany
   */
  export type AchievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementsWhereInput
  }

  /**
   * Achievements findRaw
   */
  export type AchievementsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Achievements aggregateRaw
   */
  export type AchievementsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Achievements.studentAchievements
   */
  export type Achievements$studentAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    where?: StudentAchievementsWhereInput
    orderBy?: StudentAchievementsOrderByWithRelationInput | StudentAchievementsOrderByWithRelationInput[]
    cursor?: StudentAchievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAchievementsScalarFieldEnum | StudentAchievementsScalarFieldEnum[]
  }

  /**
   * Achievements without action
   */
  export type AchievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievements
     */
    select?: AchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievements
     */
    omit?: AchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementsInclude<ExtArgs> | null
  }


  /**
   * Model StudentAchievements
   */

  export type AggregateStudentAchievements = {
    _count: StudentAchievementsCountAggregateOutputType | null
    _avg: StudentAchievementsAvgAggregateOutputType | null
    _sum: StudentAchievementsSumAggregateOutputType | null
    _min: StudentAchievementsMinAggregateOutputType | null
    _max: StudentAchievementsMaxAggregateOutputType | null
  }

  export type StudentAchievementsAvgAggregateOutputType = {
    count: number | null
  }

  export type StudentAchievementsSumAggregateOutputType = {
    count: number | null
  }

  export type StudentAchievementsMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    achievementId: string | null
    count: number | null
  }

  export type StudentAchievementsMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    achievementId: string | null
    count: number | null
  }

  export type StudentAchievementsCountAggregateOutputType = {
    id: number
    studentId: number
    achievementId: number
    count: number
    _all: number
  }


  export type StudentAchievementsAvgAggregateInputType = {
    count?: true
  }

  export type StudentAchievementsSumAggregateInputType = {
    count?: true
  }

  export type StudentAchievementsMinAggregateInputType = {
    id?: true
    studentId?: true
    achievementId?: true
    count?: true
  }

  export type StudentAchievementsMaxAggregateInputType = {
    id?: true
    studentId?: true
    achievementId?: true
    count?: true
  }

  export type StudentAchievementsCountAggregateInputType = {
    id?: true
    studentId?: true
    achievementId?: true
    count?: true
    _all?: true
  }

  export type StudentAchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAchievements to aggregate.
     */
    where?: StudentAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementsOrderByWithRelationInput | StudentAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAchievements
    **/
    _count?: true | StudentAchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAchievementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentAchievementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAchievementsMaxAggregateInputType
  }

  export type GetStudentAchievementsAggregateType<T extends StudentAchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAchievements[P]>
      : GetScalarType<T[P], AggregateStudentAchievements[P]>
  }




  export type StudentAchievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAchievementsWhereInput
    orderBy?: StudentAchievementsOrderByWithAggregationInput | StudentAchievementsOrderByWithAggregationInput[]
    by: StudentAchievementsScalarFieldEnum[] | StudentAchievementsScalarFieldEnum
    having?: StudentAchievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAchievementsCountAggregateInputType | true
    _avg?: StudentAchievementsAvgAggregateInputType
    _sum?: StudentAchievementsSumAggregateInputType
    _min?: StudentAchievementsMinAggregateInputType
    _max?: StudentAchievementsMaxAggregateInputType
  }

  export type StudentAchievementsGroupByOutputType = {
    id: string
    studentId: string
    achievementId: string
    count: number
    _count: StudentAchievementsCountAggregateOutputType | null
    _avg: StudentAchievementsAvgAggregateOutputType | null
    _sum: StudentAchievementsSumAggregateOutputType | null
    _min: StudentAchievementsMinAggregateOutputType | null
    _max: StudentAchievementsMaxAggregateOutputType | null
  }

  type GetStudentAchievementsGroupByPayload<T extends StudentAchievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAchievementsGroupByOutputType[P]>
        }
      >
    >


  export type StudentAchievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    achievementId?: boolean
    count?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    achievements?: boolean | AchievementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAchievements"]>



  export type StudentAchievementsSelectScalar = {
    id?: boolean
    studentId?: boolean
    achievementId?: boolean
    count?: boolean
  }

  export type StudentAchievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "achievementId" | "count", ExtArgs["result"]["studentAchievements"]>
  export type StudentAchievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    achievements?: boolean | AchievementsDefaultArgs<ExtArgs>
  }

  export type $StudentAchievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAchievements"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      achievements: Prisma.$AchievementsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      achievementId: string
      count: number
    }, ExtArgs["result"]["studentAchievements"]>
    composites: {}
  }

  type StudentAchievementsGetPayload<S extends boolean | null | undefined | StudentAchievementsDefaultArgs> = $Result.GetResult<Prisma.$StudentAchievementsPayload, S>

  type StudentAchievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAchievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAchievementsCountAggregateInputType | true
    }

  export interface StudentAchievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAchievements'], meta: { name: 'StudentAchievements' } }
    /**
     * Find zero or one StudentAchievements that matches the filter.
     * @param {StudentAchievementsFindUniqueArgs} args - Arguments to find a StudentAchievements
     * @example
     * // Get one StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAchievementsFindUniqueArgs>(args: SelectSubset<T, StudentAchievementsFindUniqueArgs<ExtArgs>>): Prisma__StudentAchievementsClient<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StudentAchievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAchievementsFindUniqueOrThrowArgs} args - Arguments to find a StudentAchievements
     * @example
     * // Get one StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAchievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAchievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAchievementsClient<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StudentAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementsFindFirstArgs} args - Arguments to find a StudentAchievements
     * @example
     * // Get one StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAchievementsFindFirstArgs>(args?: SelectSubset<T, StudentAchievementsFindFirstArgs<ExtArgs>>): Prisma__StudentAchievementsClient<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StudentAchievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementsFindFirstOrThrowArgs} args - Arguments to find a StudentAchievements
     * @example
     * // Get one StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAchievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAchievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAchievementsClient<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StudentAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.findMany()
     * 
     * // Get first 10 StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAchievementsWithIdOnly = await prisma.studentAchievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAchievementsFindManyArgs>(args?: SelectSubset<T, StudentAchievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StudentAchievements.
     * @param {StudentAchievementsCreateArgs} args - Arguments to create a StudentAchievements.
     * @example
     * // Create one StudentAchievements
     * const StudentAchievements = await prisma.studentAchievements.create({
     *   data: {
     *     // ... data to create a StudentAchievements
     *   }
     * })
     * 
     */
    create<T extends StudentAchievementsCreateArgs>(args: SelectSubset<T, StudentAchievementsCreateArgs<ExtArgs>>): Prisma__StudentAchievementsClient<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StudentAchievements.
     * @param {StudentAchievementsCreateManyArgs} args - Arguments to create many StudentAchievements.
     * @example
     * // Create many StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAchievementsCreateManyArgs>(args?: SelectSubset<T, StudentAchievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentAchievements.
     * @param {StudentAchievementsDeleteArgs} args - Arguments to delete one StudentAchievements.
     * @example
     * // Delete one StudentAchievements
     * const StudentAchievements = await prisma.studentAchievements.delete({
     *   where: {
     *     // ... filter to delete one StudentAchievements
     *   }
     * })
     * 
     */
    delete<T extends StudentAchievementsDeleteArgs>(args: SelectSubset<T, StudentAchievementsDeleteArgs<ExtArgs>>): Prisma__StudentAchievementsClient<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StudentAchievements.
     * @param {StudentAchievementsUpdateArgs} args - Arguments to update one StudentAchievements.
     * @example
     * // Update one StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAchievementsUpdateArgs>(args: SelectSubset<T, StudentAchievementsUpdateArgs<ExtArgs>>): Prisma__StudentAchievementsClient<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StudentAchievements.
     * @param {StudentAchievementsDeleteManyArgs} args - Arguments to filter StudentAchievements to delete.
     * @example
     * // Delete a few StudentAchievements
     * const { count } = await prisma.studentAchievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAchievementsDeleteManyArgs>(args?: SelectSubset<T, StudentAchievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAchievementsUpdateManyArgs>(args: SelectSubset<T, StudentAchievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentAchievements.
     * @param {StudentAchievementsUpsertArgs} args - Arguments to update or create a StudentAchievements.
     * @example
     * // Update or create a StudentAchievements
     * const studentAchievements = await prisma.studentAchievements.upsert({
     *   create: {
     *     // ... data to create a StudentAchievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAchievements we want to update
     *   }
     * })
     */
    upsert<T extends StudentAchievementsUpsertArgs>(args: SelectSubset<T, StudentAchievementsUpsertArgs<ExtArgs>>): Prisma__StudentAchievementsClient<$Result.GetResult<Prisma.$StudentAchievementsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StudentAchievements that matches the filter.
     * @param {StudentAchievementsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const studentAchievements = await prisma.studentAchievements.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentAchievementsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a StudentAchievements.
     * @param {StudentAchievementsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const studentAchievements = await prisma.studentAchievements.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAchievementsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of StudentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementsCountArgs} args - Arguments to filter StudentAchievements to count.
     * @example
     * // Count the number of StudentAchievements
     * const count = await prisma.studentAchievements.count({
     *   where: {
     *     // ... the filter for the StudentAchievements we want to count
     *   }
     * })
    **/
    count<T extends StudentAchievementsCountArgs>(
      args?: Subset<T, StudentAchievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAchievementsAggregateArgs>(args: Subset<T, StudentAchievementsAggregateArgs>): Prisma.PrismaPromise<GetStudentAchievementsAggregateType<T>>

    /**
     * Group by StudentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementsGroupByArgs} args - Group by arguments.
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
      T extends StudentAchievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAchievementsGroupByArgs['orderBy'] }
        : { orderBy?: StudentAchievementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentAchievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAchievements model
   */
  readonly fields: StudentAchievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAchievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAchievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    achievements<T extends AchievementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementsDefaultArgs<ExtArgs>>): Prisma__AchievementsClient<$Result.GetResult<Prisma.$AchievementsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the StudentAchievements model
   */ 
  interface StudentAchievementsFieldRefs {
    readonly id: FieldRef<"StudentAchievements", 'String'>
    readonly studentId: FieldRef<"StudentAchievements", 'String'>
    readonly achievementId: FieldRef<"StudentAchievements", 'String'>
    readonly count: FieldRef<"StudentAchievements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StudentAchievements findUnique
   */
  export type StudentAchievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievements to fetch.
     */
    where: StudentAchievementsWhereUniqueInput
  }

  /**
   * StudentAchievements findUniqueOrThrow
   */
  export type StudentAchievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievements to fetch.
     */
    where: StudentAchievementsWhereUniqueInput
  }

  /**
   * StudentAchievements findFirst
   */
  export type StudentAchievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievements to fetch.
     */
    where?: StudentAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementsOrderByWithRelationInput | StudentAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAchievements.
     */
    cursor?: StudentAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAchievements.
     */
    distinct?: StudentAchievementsScalarFieldEnum | StudentAchievementsScalarFieldEnum[]
  }

  /**
   * StudentAchievements findFirstOrThrow
   */
  export type StudentAchievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievements to fetch.
     */
    where?: StudentAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementsOrderByWithRelationInput | StudentAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAchievements.
     */
    cursor?: StudentAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAchievements.
     */
    distinct?: StudentAchievementsScalarFieldEnum | StudentAchievementsScalarFieldEnum[]
  }

  /**
   * StudentAchievements findMany
   */
  export type StudentAchievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievements to fetch.
     */
    where?: StudentAchievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementsOrderByWithRelationInput | StudentAchievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAchievements.
     */
    cursor?: StudentAchievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    distinct?: StudentAchievementsScalarFieldEnum | StudentAchievementsScalarFieldEnum[]
  }

  /**
   * StudentAchievements create
   */
  export type StudentAchievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAchievements.
     */
    data: XOR<StudentAchievementsCreateInput, StudentAchievementsUncheckedCreateInput>
  }

  /**
   * StudentAchievements createMany
   */
  export type StudentAchievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAchievements.
     */
    data: StudentAchievementsCreateManyInput | StudentAchievementsCreateManyInput[]
  }

  /**
   * StudentAchievements update
   */
  export type StudentAchievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAchievements.
     */
    data: XOR<StudentAchievementsUpdateInput, StudentAchievementsUncheckedUpdateInput>
    /**
     * Choose, which StudentAchievements to update.
     */
    where: StudentAchievementsWhereUniqueInput
  }

  /**
   * StudentAchievements updateMany
   */
  export type StudentAchievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAchievements.
     */
    data: XOR<StudentAchievementsUpdateManyMutationInput, StudentAchievementsUncheckedUpdateManyInput>
    /**
     * Filter which StudentAchievements to update
     */
    where?: StudentAchievementsWhereInput
  }

  /**
   * StudentAchievements upsert
   */
  export type StudentAchievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAchievements to update in case it exists.
     */
    where: StudentAchievementsWhereUniqueInput
    /**
     * In case the StudentAchievements found by the `where` argument doesn't exist, create a new StudentAchievements with this data.
     */
    create: XOR<StudentAchievementsCreateInput, StudentAchievementsUncheckedCreateInput>
    /**
     * In case the StudentAchievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAchievementsUpdateInput, StudentAchievementsUncheckedUpdateInput>
  }

  /**
   * StudentAchievements delete
   */
  export type StudentAchievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
    /**
     * Filter which StudentAchievements to delete.
     */
    where: StudentAchievementsWhereUniqueInput
  }

  /**
   * StudentAchievements deleteMany
   */
  export type StudentAchievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAchievements to delete
     */
    where?: StudentAchievementsWhereInput
  }

  /**
   * StudentAchievements findRaw
   */
  export type StudentAchievementsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudentAchievements aggregateRaw
   */
  export type StudentAchievementsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * StudentAchievements without action
   */
  export type StudentAchievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievements
     */
    select?: StudentAchievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievements
     */
    omit?: StudentAchievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementsInclude<ExtArgs> | null
  }


  /**
   * Model OTPStudent
   */

  export type AggregateOTPStudent = {
    _count: OTPStudentCountAggregateOutputType | null
    _min: OTPStudentMinAggregateOutputType | null
    _max: OTPStudentMaxAggregateOutputType | null
  }

  export type OTPStudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    rno: string | null
    uname: string | null
    salt: string | null
    hash: string | null
    leetCodeProfile: string | null
    otp: string | null
    expiry: Date | null
    status: string | null
  }

  export type OTPStudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rno: string | null
    uname: string | null
    salt: string | null
    hash: string | null
    leetCodeProfile: string | null
    otp: string | null
    expiry: Date | null
    status: string | null
  }

  export type OTPStudentCountAggregateOutputType = {
    id: number
    name: number
    rno: number
    uname: number
    salt: number
    hash: number
    leetCodeProfile: number
    otp: number
    expiry: number
    status: number
    _all: number
  }


  export type OTPStudentMinAggregateInputType = {
    id?: true
    name?: true
    rno?: true
    uname?: true
    salt?: true
    hash?: true
    leetCodeProfile?: true
    otp?: true
    expiry?: true
    status?: true
  }

  export type OTPStudentMaxAggregateInputType = {
    id?: true
    name?: true
    rno?: true
    uname?: true
    salt?: true
    hash?: true
    leetCodeProfile?: true
    otp?: true
    expiry?: true
    status?: true
  }

  export type OTPStudentCountAggregateInputType = {
    id?: true
    name?: true
    rno?: true
    uname?: true
    salt?: true
    hash?: true
    leetCodeProfile?: true
    otp?: true
    expiry?: true
    status?: true
    _all?: true
  }

  export type OTPStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPStudent to aggregate.
     */
    where?: OTPStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPStudents to fetch.
     */
    orderBy?: OTPStudentOrderByWithRelationInput | OTPStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPStudents
    **/
    _count?: true | OTPStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPStudentMaxAggregateInputType
  }

  export type GetOTPStudentAggregateType<T extends OTPStudentAggregateArgs> = {
        [P in keyof T & keyof AggregateOTPStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTPStudent[P]>
      : GetScalarType<T[P], AggregateOTPStudent[P]>
  }




  export type OTPStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPStudentWhereInput
    orderBy?: OTPStudentOrderByWithAggregationInput | OTPStudentOrderByWithAggregationInput[]
    by: OTPStudentScalarFieldEnum[] | OTPStudentScalarFieldEnum
    having?: OTPStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPStudentCountAggregateInputType | true
    _min?: OTPStudentMinAggregateInputType
    _max?: OTPStudentMaxAggregateInputType
  }

  export type OTPStudentGroupByOutputType = {
    id: string
    name: string
    rno: string
    uname: string
    salt: string
    hash: string
    leetCodeProfile: string | null
    otp: string
    expiry: Date
    status: string
    _count: OTPStudentCountAggregateOutputType | null
    _min: OTPStudentMinAggregateOutputType | null
    _max: OTPStudentMaxAggregateOutputType | null
  }

  type GetOTPStudentGroupByPayload<T extends OTPStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPStudentGroupByOutputType[P]>
            : GetScalarType<T[P], OTPStudentGroupByOutputType[P]>
        }
      >
    >


  export type OTPStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rno?: boolean
    uname?: boolean
    salt?: boolean
    hash?: boolean
    leetCodeProfile?: boolean
    otp?: boolean
    expiry?: boolean
    status?: boolean
  }, ExtArgs["result"]["oTPStudent"]>



  export type OTPStudentSelectScalar = {
    id?: boolean
    name?: boolean
    rno?: boolean
    uname?: boolean
    salt?: boolean
    hash?: boolean
    leetCodeProfile?: boolean
    otp?: boolean
    expiry?: boolean
    status?: boolean
  }

  export type OTPStudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rno" | "uname" | "salt" | "hash" | "leetCodeProfile" | "otp" | "expiry" | "status", ExtArgs["result"]["oTPStudent"]>

  export type $OTPStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTPStudent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rno: string
      uname: string
      salt: string
      hash: string
      leetCodeProfile: string | null
      otp: string
      expiry: Date
      status: string
    }, ExtArgs["result"]["oTPStudent"]>
    composites: {}
  }

  type OTPStudentGetPayload<S extends boolean | null | undefined | OTPStudentDefaultArgs> = $Result.GetResult<Prisma.$OTPStudentPayload, S>

  type OTPStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OTPStudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OTPStudentCountAggregateInputType | true
    }

  export interface OTPStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTPStudent'], meta: { name: 'OTPStudent' } }
    /**
     * Find zero or one OTPStudent that matches the filter.
     * @param {OTPStudentFindUniqueArgs} args - Arguments to find a OTPStudent
     * @example
     * // Get one OTPStudent
     * const oTPStudent = await prisma.oTPStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPStudentFindUniqueArgs>(args: SelectSubset<T, OTPStudentFindUniqueArgs<ExtArgs>>): Prisma__OTPStudentClient<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OTPStudent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OTPStudentFindUniqueOrThrowArgs} args - Arguments to find a OTPStudent
     * @example
     * // Get one OTPStudent
     * const oTPStudent = await prisma.oTPStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPStudentClient<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OTPStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPStudentFindFirstArgs} args - Arguments to find a OTPStudent
     * @example
     * // Get one OTPStudent
     * const oTPStudent = await prisma.oTPStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPStudentFindFirstArgs>(args?: SelectSubset<T, OTPStudentFindFirstArgs<ExtArgs>>): Prisma__OTPStudentClient<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OTPStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPStudentFindFirstOrThrowArgs} args - Arguments to find a OTPStudent
     * @example
     * // Get one OTPStudent
     * const oTPStudent = await prisma.oTPStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPStudentClient<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OTPStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPStudents
     * const oTPStudents = await prisma.oTPStudent.findMany()
     * 
     * // Get first 10 OTPStudents
     * const oTPStudents = await prisma.oTPStudent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPStudentWithIdOnly = await prisma.oTPStudent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPStudentFindManyArgs>(args?: SelectSubset<T, OTPStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OTPStudent.
     * @param {OTPStudentCreateArgs} args - Arguments to create a OTPStudent.
     * @example
     * // Create one OTPStudent
     * const OTPStudent = await prisma.oTPStudent.create({
     *   data: {
     *     // ... data to create a OTPStudent
     *   }
     * })
     * 
     */
    create<T extends OTPStudentCreateArgs>(args: SelectSubset<T, OTPStudentCreateArgs<ExtArgs>>): Prisma__OTPStudentClient<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OTPStudents.
     * @param {OTPStudentCreateManyArgs} args - Arguments to create many OTPStudents.
     * @example
     * // Create many OTPStudents
     * const oTPStudent = await prisma.oTPStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPStudentCreateManyArgs>(args?: SelectSubset<T, OTPStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OTPStudent.
     * @param {OTPStudentDeleteArgs} args - Arguments to delete one OTPStudent.
     * @example
     * // Delete one OTPStudent
     * const OTPStudent = await prisma.oTPStudent.delete({
     *   where: {
     *     // ... filter to delete one OTPStudent
     *   }
     * })
     * 
     */
    delete<T extends OTPStudentDeleteArgs>(args: SelectSubset<T, OTPStudentDeleteArgs<ExtArgs>>): Prisma__OTPStudentClient<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OTPStudent.
     * @param {OTPStudentUpdateArgs} args - Arguments to update one OTPStudent.
     * @example
     * // Update one OTPStudent
     * const oTPStudent = await prisma.oTPStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPStudentUpdateArgs>(args: SelectSubset<T, OTPStudentUpdateArgs<ExtArgs>>): Prisma__OTPStudentClient<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OTPStudents.
     * @param {OTPStudentDeleteManyArgs} args - Arguments to filter OTPStudents to delete.
     * @example
     * // Delete a few OTPStudents
     * const { count } = await prisma.oTPStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPStudentDeleteManyArgs>(args?: SelectSubset<T, OTPStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPStudents
     * const oTPStudent = await prisma.oTPStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPStudentUpdateManyArgs>(args: SelectSubset<T, OTPStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OTPStudent.
     * @param {OTPStudentUpsertArgs} args - Arguments to update or create a OTPStudent.
     * @example
     * // Update or create a OTPStudent
     * const oTPStudent = await prisma.oTPStudent.upsert({
     *   create: {
     *     // ... data to create a OTPStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTPStudent we want to update
     *   }
     * })
     */
    upsert<T extends OTPStudentUpsertArgs>(args: SelectSubset<T, OTPStudentUpsertArgs<ExtArgs>>): Prisma__OTPStudentClient<$Result.GetResult<Prisma.$OTPStudentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OTPStudents that matches the filter.
     * @param {OTPStudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const oTPStudent = await prisma.oTPStudent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OTPStudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OTPStudent.
     * @param {OTPStudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const oTPStudent = await prisma.oTPStudent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OTPStudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OTPStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPStudentCountArgs} args - Arguments to filter OTPStudents to count.
     * @example
     * // Count the number of OTPStudents
     * const count = await prisma.oTPStudent.count({
     *   where: {
     *     // ... the filter for the OTPStudents we want to count
     *   }
     * })
    **/
    count<T extends OTPStudentCountArgs>(
      args?: Subset<T, OTPStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTPStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OTPStudentAggregateArgs>(args: Subset<T, OTPStudentAggregateArgs>): Prisma.PrismaPromise<GetOTPStudentAggregateType<T>>

    /**
     * Group by OTPStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPStudentGroupByArgs} args - Group by arguments.
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
      T extends OTPStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPStudentGroupByArgs['orderBy'] }
        : { orderBy?: OTPStudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OTPStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTPStudent model
   */
  readonly fields: OTPStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTPStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the OTPStudent model
   */ 
  interface OTPStudentFieldRefs {
    readonly id: FieldRef<"OTPStudent", 'String'>
    readonly name: FieldRef<"OTPStudent", 'String'>
    readonly rno: FieldRef<"OTPStudent", 'String'>
    readonly uname: FieldRef<"OTPStudent", 'String'>
    readonly salt: FieldRef<"OTPStudent", 'String'>
    readonly hash: FieldRef<"OTPStudent", 'String'>
    readonly leetCodeProfile: FieldRef<"OTPStudent", 'String'>
    readonly otp: FieldRef<"OTPStudent", 'String'>
    readonly expiry: FieldRef<"OTPStudent", 'DateTime'>
    readonly status: FieldRef<"OTPStudent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OTPStudent findUnique
   */
  export type OTPStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * Filter, which OTPStudent to fetch.
     */
    where: OTPStudentWhereUniqueInput
  }

  /**
   * OTPStudent findUniqueOrThrow
   */
  export type OTPStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * Filter, which OTPStudent to fetch.
     */
    where: OTPStudentWhereUniqueInput
  }

  /**
   * OTPStudent findFirst
   */
  export type OTPStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * Filter, which OTPStudent to fetch.
     */
    where?: OTPStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPStudents to fetch.
     */
    orderBy?: OTPStudentOrderByWithRelationInput | OTPStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPStudents.
     */
    cursor?: OTPStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPStudents.
     */
    distinct?: OTPStudentScalarFieldEnum | OTPStudentScalarFieldEnum[]
  }

  /**
   * OTPStudent findFirstOrThrow
   */
  export type OTPStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * Filter, which OTPStudent to fetch.
     */
    where?: OTPStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPStudents to fetch.
     */
    orderBy?: OTPStudentOrderByWithRelationInput | OTPStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPStudents.
     */
    cursor?: OTPStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPStudents.
     */
    distinct?: OTPStudentScalarFieldEnum | OTPStudentScalarFieldEnum[]
  }

  /**
   * OTPStudent findMany
   */
  export type OTPStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * Filter, which OTPStudents to fetch.
     */
    where?: OTPStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPStudents to fetch.
     */
    orderBy?: OTPStudentOrderByWithRelationInput | OTPStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPStudents.
     */
    cursor?: OTPStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPStudents.
     */
    skip?: number
    distinct?: OTPStudentScalarFieldEnum | OTPStudentScalarFieldEnum[]
  }

  /**
   * OTPStudent create
   */
  export type OTPStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * The data needed to create a OTPStudent.
     */
    data: XOR<OTPStudentCreateInput, OTPStudentUncheckedCreateInput>
  }

  /**
   * OTPStudent createMany
   */
  export type OTPStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPStudents.
     */
    data: OTPStudentCreateManyInput | OTPStudentCreateManyInput[]
  }

  /**
   * OTPStudent update
   */
  export type OTPStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * The data needed to update a OTPStudent.
     */
    data: XOR<OTPStudentUpdateInput, OTPStudentUncheckedUpdateInput>
    /**
     * Choose, which OTPStudent to update.
     */
    where: OTPStudentWhereUniqueInput
  }

  /**
   * OTPStudent updateMany
   */
  export type OTPStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPStudents.
     */
    data: XOR<OTPStudentUpdateManyMutationInput, OTPStudentUncheckedUpdateManyInput>
    /**
     * Filter which OTPStudents to update
     */
    where?: OTPStudentWhereInput
  }

  /**
   * OTPStudent upsert
   */
  export type OTPStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * The filter to search for the OTPStudent to update in case it exists.
     */
    where: OTPStudentWhereUniqueInput
    /**
     * In case the OTPStudent found by the `where` argument doesn't exist, create a new OTPStudent with this data.
     */
    create: XOR<OTPStudentCreateInput, OTPStudentUncheckedCreateInput>
    /**
     * In case the OTPStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPStudentUpdateInput, OTPStudentUncheckedUpdateInput>
  }

  /**
   * OTPStudent delete
   */
  export type OTPStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
    /**
     * Filter which OTPStudent to delete.
     */
    where: OTPStudentWhereUniqueInput
  }

  /**
   * OTPStudent deleteMany
   */
  export type OTPStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPStudents to delete
     */
    where?: OTPStudentWhereInput
  }

  /**
   * OTPStudent findRaw
   */
  export type OTPStudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OTPStudent aggregateRaw
   */
  export type OTPStudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OTPStudent without action
   */
  export type OTPStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTPStudent
     */
    select?: OTPStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTPStudent
     */
    omit?: OTPStudentOmit<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    session: string | null
    expiry: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    session: string | null
    expiry: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    studentId: number
    session: number
    expiry: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    studentId?: true
    session?: true
    expiry?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    studentId?: true
    session?: true
    expiry?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    studentId?: true
    session?: true
    expiry?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    studentId: string
    session: string
    expiry: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    session?: boolean
    expiry?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    studentId?: boolean
    session?: boolean
    expiry?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "session" | "expiry", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      session: string
      expiry: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SessionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly studentId: FieldRef<"Session", 'String'>
    readonly session: FieldRef<"Session", 'String'>
    readonly expiry: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Discussions
   */

  export type AggregateDiscussions = {
    _count: DiscussionsCountAggregateOutputType | null
    _min: DiscussionsMinAggregateOutputType | null
    _max: DiscussionsMaxAggregateOutputType | null
  }

  export type DiscussionsMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    type: string | null
    questionId: string | null
    repliedTo: string | null
    timeOfComment: Date | null
  }

  export type DiscussionsMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    type: string | null
    questionId: string | null
    repliedTo: string | null
    timeOfComment: Date | null
  }

  export type DiscussionsCountAggregateOutputType = {
    id: number
    studentId: number
    type: number
    questionId: number
    repliedTo: number
    timeOfComment: number
    _all: number
  }


  export type DiscussionsMinAggregateInputType = {
    id?: true
    studentId?: true
    type?: true
    questionId?: true
    repliedTo?: true
    timeOfComment?: true
  }

  export type DiscussionsMaxAggregateInputType = {
    id?: true
    studentId?: true
    type?: true
    questionId?: true
    repliedTo?: true
    timeOfComment?: true
  }

  export type DiscussionsCountAggregateInputType = {
    id?: true
    studentId?: true
    type?: true
    questionId?: true
    repliedTo?: true
    timeOfComment?: true
    _all?: true
  }

  export type DiscussionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussions to aggregate.
     */
    where?: DiscussionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionsOrderByWithRelationInput | DiscussionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discussions
    **/
    _count?: true | DiscussionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionsMaxAggregateInputType
  }

  export type GetDiscussionsAggregateType<T extends DiscussionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussions[P]>
      : GetScalarType<T[P], AggregateDiscussions[P]>
  }




  export type DiscussionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionsWhereInput
    orderBy?: DiscussionsOrderByWithAggregationInput | DiscussionsOrderByWithAggregationInput[]
    by: DiscussionsScalarFieldEnum[] | DiscussionsScalarFieldEnum
    having?: DiscussionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionsCountAggregateInputType | true
    _min?: DiscussionsMinAggregateInputType
    _max?: DiscussionsMaxAggregateInputType
  }

  export type DiscussionsGroupByOutputType = {
    id: string
    studentId: string
    type: string
    questionId: string | null
    repliedTo: string | null
    timeOfComment: Date
    _count: DiscussionsCountAggregateOutputType | null
    _min: DiscussionsMinAggregateOutputType | null
    _max: DiscussionsMaxAggregateOutputType | null
  }

  type GetDiscussionsGroupByPayload<T extends DiscussionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionsGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionsGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    type?: boolean
    questionId?: boolean
    repliedTo?: boolean
    timeOfComment?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    question?: boolean | Discussions$questionArgs<ExtArgs>
    toWhomIReply?: boolean | Discussions$toWhomIReplyArgs<ExtArgs>
    repliesIGet?: boolean | Discussions$repliesIGetArgs<ExtArgs>
    _count?: boolean | DiscussionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussions"]>



  export type DiscussionsSelectScalar = {
    id?: boolean
    studentId?: boolean
    type?: boolean
    questionId?: boolean
    repliedTo?: boolean
    timeOfComment?: boolean
  }

  export type DiscussionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "type" | "questionId" | "repliedTo" | "timeOfComment", ExtArgs["result"]["discussions"]>
  export type DiscussionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    question?: boolean | Discussions$questionArgs<ExtArgs>
    toWhomIReply?: boolean | Discussions$toWhomIReplyArgs<ExtArgs>
    repliesIGet?: boolean | Discussions$repliesIGetArgs<ExtArgs>
    _count?: boolean | DiscussionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiscussionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discussions"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      question: Prisma.$QuestionsPayload<ExtArgs> | null
      toWhomIReply: Prisma.$DiscussionsPayload<ExtArgs> | null
      repliesIGet: Prisma.$DiscussionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      type: string
      questionId: string | null
      repliedTo: string | null
      timeOfComment: Date
    }, ExtArgs["result"]["discussions"]>
    composites: {}
  }

  type DiscussionsGetPayload<S extends boolean | null | undefined | DiscussionsDefaultArgs> = $Result.GetResult<Prisma.$DiscussionsPayload, S>

  type DiscussionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionsCountAggregateInputType | true
    }

  export interface DiscussionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discussions'], meta: { name: 'Discussions' } }
    /**
     * Find zero or one Discussions that matches the filter.
     * @param {DiscussionsFindUniqueArgs} args - Arguments to find a Discussions
     * @example
     * // Get one Discussions
     * const discussions = await prisma.discussions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionsFindUniqueArgs>(args: SelectSubset<T, DiscussionsFindUniqueArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Discussions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionsFindUniqueOrThrowArgs} args - Arguments to find a Discussions
     * @example
     * // Get one Discussions
     * const discussions = await prisma.discussions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionsFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionsFindFirstArgs} args - Arguments to find a Discussions
     * @example
     * // Get one Discussions
     * const discussions = await prisma.discussions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionsFindFirstArgs>(args?: SelectSubset<T, DiscussionsFindFirstArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Discussions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionsFindFirstOrThrowArgs} args - Arguments to find a Discussions
     * @example
     * // Get one Discussions
     * const discussions = await prisma.discussions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionsFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discussions
     * const discussions = await prisma.discussions.findMany()
     * 
     * // Get first 10 Discussions
     * const discussions = await prisma.discussions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discussionsWithIdOnly = await prisma.discussions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscussionsFindManyArgs>(args?: SelectSubset<T, DiscussionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Discussions.
     * @param {DiscussionsCreateArgs} args - Arguments to create a Discussions.
     * @example
     * // Create one Discussions
     * const Discussions = await prisma.discussions.create({
     *   data: {
     *     // ... data to create a Discussions
     *   }
     * })
     * 
     */
    create<T extends DiscussionsCreateArgs>(args: SelectSubset<T, DiscussionsCreateArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Discussions.
     * @param {DiscussionsCreateManyArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussions = await prisma.discussions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionsCreateManyArgs>(args?: SelectSubset<T, DiscussionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Discussions.
     * @param {DiscussionsDeleteArgs} args - Arguments to delete one Discussions.
     * @example
     * // Delete one Discussions
     * const Discussions = await prisma.discussions.delete({
     *   where: {
     *     // ... filter to delete one Discussions
     *   }
     * })
     * 
     */
    delete<T extends DiscussionsDeleteArgs>(args: SelectSubset<T, DiscussionsDeleteArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Discussions.
     * @param {DiscussionsUpdateArgs} args - Arguments to update one Discussions.
     * @example
     * // Update one Discussions
     * const discussions = await prisma.discussions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionsUpdateArgs>(args: SelectSubset<T, DiscussionsUpdateArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Discussions.
     * @param {DiscussionsDeleteManyArgs} args - Arguments to filter Discussions to delete.
     * @example
     * // Delete a few Discussions
     * const { count } = await prisma.discussions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionsDeleteManyArgs>(args?: SelectSubset<T, DiscussionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discussions
     * const discussions = await prisma.discussions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionsUpdateManyArgs>(args: SelectSubset<T, DiscussionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Discussions.
     * @param {DiscussionsUpsertArgs} args - Arguments to update or create a Discussions.
     * @example
     * // Update or create a Discussions
     * const discussions = await prisma.discussions.upsert({
     *   create: {
     *     // ... data to create a Discussions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discussions we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionsUpsertArgs>(args: SelectSubset<T, DiscussionsUpsertArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * @param {DiscussionsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const discussions = await prisma.discussions.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DiscussionsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Discussions.
     * @param {DiscussionsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const discussions = await prisma.discussions.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DiscussionsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionsCountArgs} args - Arguments to filter Discussions to count.
     * @example
     * // Count the number of Discussions
     * const count = await prisma.discussions.count({
     *   where: {
     *     // ... the filter for the Discussions we want to count
     *   }
     * })
    **/
    count<T extends DiscussionsCountArgs>(
      args?: Subset<T, DiscussionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscussionsAggregateArgs>(args: Subset<T, DiscussionsAggregateArgs>): Prisma.PrismaPromise<GetDiscussionsAggregateType<T>>

    /**
     * Group by Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionsGroupByArgs} args - Group by arguments.
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
      T extends DiscussionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionsGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscussionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discussions model
   */
  readonly fields: DiscussionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discussions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    question<T extends Discussions$questionArgs<ExtArgs> = {}>(args?: Subset<T, Discussions$questionArgs<ExtArgs>>): Prisma__QuestionsClient<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    toWhomIReply<T extends Discussions$toWhomIReplyArgs<ExtArgs> = {}>(args?: Subset<T, Discussions$toWhomIReplyArgs<ExtArgs>>): Prisma__DiscussionsClient<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    repliesIGet<T extends Discussions$repliesIGetArgs<ExtArgs> = {}>(args?: Subset<T, Discussions$repliesIGetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Discussions model
   */ 
  interface DiscussionsFieldRefs {
    readonly id: FieldRef<"Discussions", 'String'>
    readonly studentId: FieldRef<"Discussions", 'String'>
    readonly type: FieldRef<"Discussions", 'String'>
    readonly questionId: FieldRef<"Discussions", 'String'>
    readonly repliedTo: FieldRef<"Discussions", 'String'>
    readonly timeOfComment: FieldRef<"Discussions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Discussions findUnique
   */
  export type DiscussionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where: DiscussionsWhereUniqueInput
  }

  /**
   * Discussions findUniqueOrThrow
   */
  export type DiscussionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where: DiscussionsWhereUniqueInput
  }

  /**
   * Discussions findFirst
   */
  export type DiscussionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionsOrderByWithRelationInput | DiscussionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * Discussions findFirstOrThrow
   */
  export type DiscussionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionsOrderByWithRelationInput | DiscussionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * Discussions findMany
   */
  export type DiscussionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionsOrderByWithRelationInput | DiscussionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discussions.
     */
    cursor?: DiscussionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * Discussions create
   */
  export type DiscussionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Discussions.
     */
    data: XOR<DiscussionsCreateInput, DiscussionsUncheckedCreateInput>
  }

  /**
   * Discussions createMany
   */
  export type DiscussionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionsCreateManyInput | DiscussionsCreateManyInput[]
  }

  /**
   * Discussions update
   */
  export type DiscussionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Discussions.
     */
    data: XOR<DiscussionsUpdateInput, DiscussionsUncheckedUpdateInput>
    /**
     * Choose, which Discussions to update.
     */
    where: DiscussionsWhereUniqueInput
  }

  /**
   * Discussions updateMany
   */
  export type DiscussionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionsUpdateManyMutationInput, DiscussionsUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionsWhereInput
  }

  /**
   * Discussions upsert
   */
  export type DiscussionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Discussions to update in case it exists.
     */
    where: DiscussionsWhereUniqueInput
    /**
     * In case the Discussions found by the `where` argument doesn't exist, create a new Discussions with this data.
     */
    create: XOR<DiscussionsCreateInput, DiscussionsUncheckedCreateInput>
    /**
     * In case the Discussions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionsUpdateInput, DiscussionsUncheckedUpdateInput>
  }

  /**
   * Discussions delete
   */
  export type DiscussionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    /**
     * Filter which Discussions to delete.
     */
    where: DiscussionsWhereUniqueInput
  }

  /**
   * Discussions deleteMany
   */
  export type DiscussionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussions to delete
     */
    where?: DiscussionsWhereInput
  }

  /**
   * Discussions findRaw
   */
  export type DiscussionsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Discussions aggregateRaw
   */
  export type DiscussionsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Discussions.question
   */
  export type Discussions$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    where?: QuestionsWhereInput
  }

  /**
   * Discussions.toWhomIReply
   */
  export type Discussions$toWhomIReplyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    where?: DiscussionsWhereInput
  }

  /**
   * Discussions.repliesIGet
   */
  export type Discussions$repliesIGetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
    where?: DiscussionsWhereInput
    orderBy?: DiscussionsOrderByWithRelationInput | DiscussionsOrderByWithRelationInput[]
    cursor?: DiscussionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionsScalarFieldEnum | DiscussionsScalarFieldEnum[]
  }

  /**
   * Discussions without action
   */
  export type DiscussionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussions
     */
    select?: DiscussionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussions
     */
    omit?: DiscussionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionsInclude<ExtArgs> | null
  }


  /**
   * Model Contest
   */

  export type AggregateContest = {
    _count: ContestCountAggregateOutputType | null
    _avg: ContestAvgAggregateOutputType | null
    _sum: ContestSumAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  export type ContestAvgAggregateOutputType = {
    timeToSolveInMinutes: number | null
    totalPoints: number | null
    totalNoOfQuestions: number | null
    resultPublished: number | null
  }

  export type ContestSumAggregateOutputType = {
    timeToSolveInMinutes: number | null
    totalPoints: number | null
    totalNoOfQuestions: number | null
    resultPublished: number | null
  }

  export type ContestMinAggregateOutputType = {
    id: string | null
    miniDescription: string | null
    title: string | null
    opensOn: Date | null
    closesOn: Date | null
    timeToSolveInMinutes: number | null
    totalPoints: number | null
    totalNoOfQuestions: number | null
    resultPublished: number | null
  }

  export type ContestMaxAggregateOutputType = {
    id: string | null
    miniDescription: string | null
    title: string | null
    opensOn: Date | null
    closesOn: Date | null
    timeToSolveInMinutes: number | null
    totalPoints: number | null
    totalNoOfQuestions: number | null
    resultPublished: number | null
  }

  export type ContestCountAggregateOutputType = {
    id: number
    miniDescription: number
    title: number
    opensOn: number
    closesOn: number
    timeToSolveInMinutes: number
    totalPoints: number
    totalNoOfQuestions: number
    resultPublished: number
    _all: number
  }


  export type ContestAvgAggregateInputType = {
    timeToSolveInMinutes?: true
    totalPoints?: true
    totalNoOfQuestions?: true
    resultPublished?: true
  }

  export type ContestSumAggregateInputType = {
    timeToSolveInMinutes?: true
    totalPoints?: true
    totalNoOfQuestions?: true
    resultPublished?: true
  }

  export type ContestMinAggregateInputType = {
    id?: true
    miniDescription?: true
    title?: true
    opensOn?: true
    closesOn?: true
    timeToSolveInMinutes?: true
    totalPoints?: true
    totalNoOfQuestions?: true
    resultPublished?: true
  }

  export type ContestMaxAggregateInputType = {
    id?: true
    miniDescription?: true
    title?: true
    opensOn?: true
    closesOn?: true
    timeToSolveInMinutes?: true
    totalPoints?: true
    totalNoOfQuestions?: true
    resultPublished?: true
  }

  export type ContestCountAggregateInputType = {
    id?: true
    miniDescription?: true
    title?: true
    opensOn?: true
    closesOn?: true
    timeToSolveInMinutes?: true
    totalPoints?: true
    totalNoOfQuestions?: true
    resultPublished?: true
    _all?: true
  }

  export type ContestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contest to aggregate.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contests
    **/
    _count?: true | ContestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestMaxAggregateInputType
  }

  export type GetContestAggregateType<T extends ContestAggregateArgs> = {
        [P in keyof T & keyof AggregateContest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContest[P]>
      : GetScalarType<T[P], AggregateContest[P]>
  }




  export type ContestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestWhereInput
    orderBy?: ContestOrderByWithAggregationInput | ContestOrderByWithAggregationInput[]
    by: ContestScalarFieldEnum[] | ContestScalarFieldEnum
    having?: ContestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestCountAggregateInputType | true
    _avg?: ContestAvgAggregateInputType
    _sum?: ContestSumAggregateInputType
    _min?: ContestMinAggregateInputType
    _max?: ContestMaxAggregateInputType
  }

  export type ContestGroupByOutputType = {
    id: string
    miniDescription: string | null
    title: string
    opensOn: Date
    closesOn: Date
    timeToSolveInMinutes: number
    totalPoints: number
    totalNoOfQuestions: number
    resultPublished: number
    _count: ContestCountAggregateOutputType | null
    _avg: ContestAvgAggregateOutputType | null
    _sum: ContestSumAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  type GetContestGroupByPayload<T extends ContestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestGroupByOutputType[P]>
            : GetScalarType<T[P], ContestGroupByOutputType[P]>
        }
      >
    >


  export type ContestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    miniDescription?: boolean
    title?: boolean
    opensOn?: boolean
    closesOn?: boolean
    timeToSolveInMinutes?: boolean
    totalPoints?: boolean
    totalNoOfQuestions?: boolean
    resultPublished?: boolean
    question?: boolean | Contest$questionArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>



  export type ContestSelectScalar = {
    id?: boolean
    miniDescription?: boolean
    title?: boolean
    opensOn?: boolean
    closesOn?: boolean
    timeToSolveInMinutes?: boolean
    totalPoints?: boolean
    totalNoOfQuestions?: boolean
    resultPublished?: boolean
  }

  export type ContestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "miniDescription" | "title" | "opensOn" | "closesOn" | "timeToSolveInMinutes" | "totalPoints" | "totalNoOfQuestions" | "resultPublished", ExtArgs["result"]["contest"]>
  export type ContestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | Contest$questionArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contest"
    objects: {
      question: Prisma.$QuestionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      miniDescription: string | null
      title: string
      opensOn: Date
      closesOn: Date
      timeToSolveInMinutes: number
      totalPoints: number
      totalNoOfQuestions: number
      resultPublished: number
    }, ExtArgs["result"]["contest"]>
    composites: {}
  }

  type ContestGetPayload<S extends boolean | null | undefined | ContestDefaultArgs> = $Result.GetResult<Prisma.$ContestPayload, S>

  type ContestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestCountAggregateInputType | true
    }

  export interface ContestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contest'], meta: { name: 'Contest' } }
    /**
     * Find zero or one Contest that matches the filter.
     * @param {ContestFindUniqueArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestFindUniqueArgs>(args: SelectSubset<T, ContestFindUniqueArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Contest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestFindUniqueOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Contest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestFindFirstArgs>(args?: SelectSubset<T, ContestFindFirstArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Contest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Contests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contests
     * const contests = await prisma.contest.findMany()
     * 
     * // Get first 10 Contests
     * const contests = await prisma.contest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestWithIdOnly = await prisma.contest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestFindManyArgs>(args?: SelectSubset<T, ContestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Contest.
     * @param {ContestCreateArgs} args - Arguments to create a Contest.
     * @example
     * // Create one Contest
     * const Contest = await prisma.contest.create({
     *   data: {
     *     // ... data to create a Contest
     *   }
     * })
     * 
     */
    create<T extends ContestCreateArgs>(args: SelectSubset<T, ContestCreateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Contests.
     * @param {ContestCreateManyArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contest = await prisma.contest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestCreateManyArgs>(args?: SelectSubset<T, ContestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contest.
     * @param {ContestDeleteArgs} args - Arguments to delete one Contest.
     * @example
     * // Delete one Contest
     * const Contest = await prisma.contest.delete({
     *   where: {
     *     // ... filter to delete one Contest
     *   }
     * })
     * 
     */
    delete<T extends ContestDeleteArgs>(args: SelectSubset<T, ContestDeleteArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Contest.
     * @param {ContestUpdateArgs} args - Arguments to update one Contest.
     * @example
     * // Update one Contest
     * const contest = await prisma.contest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestUpdateArgs>(args: SelectSubset<T, ContestUpdateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Contests.
     * @param {ContestDeleteManyArgs} args - Arguments to filter Contests to delete.
     * @example
     * // Delete a few Contests
     * const { count } = await prisma.contest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestDeleteManyArgs>(args?: SelectSubset<T, ContestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contests
     * const contest = await prisma.contest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestUpdateManyArgs>(args: SelectSubset<T, ContestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contest.
     * @param {ContestUpsertArgs} args - Arguments to update or create a Contest.
     * @example
     * // Update or create a Contest
     * const contest = await prisma.contest.upsert({
     *   create: {
     *     // ... data to create a Contest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contest we want to update
     *   }
     * })
     */
    upsert<T extends ContestUpsertArgs>(args: SelectSubset<T, ContestUpsertArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Contests that matches the filter.
     * @param {ContestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contest = await prisma.contest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ContestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Contest.
     * @param {ContestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contest = await prisma.contest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCountArgs} args - Arguments to filter Contests to count.
     * @example
     * // Count the number of Contests
     * const count = await prisma.contest.count({
     *   where: {
     *     // ... the filter for the Contests we want to count
     *   }
     * })
    **/
    count<T extends ContestCountArgs>(
      args?: Subset<T, ContestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContestAggregateArgs>(args: Subset<T, ContestAggregateArgs>): Prisma.PrismaPromise<GetContestAggregateType<T>>

    /**
     * Group by Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestGroupByArgs} args - Group by arguments.
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
      T extends ContestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestGroupByArgs['orderBy'] }
        : { orderBy?: ContestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contest model
   */
  readonly fields: ContestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends Contest$questionArgs<ExtArgs> = {}>(args?: Subset<T, Contest$questionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Contest model
   */ 
  interface ContestFieldRefs {
    readonly id: FieldRef<"Contest", 'String'>
    readonly miniDescription: FieldRef<"Contest", 'String'>
    readonly title: FieldRef<"Contest", 'String'>
    readonly opensOn: FieldRef<"Contest", 'DateTime'>
    readonly closesOn: FieldRef<"Contest", 'DateTime'>
    readonly timeToSolveInMinutes: FieldRef<"Contest", 'Int'>
    readonly totalPoints: FieldRef<"Contest", 'Int'>
    readonly totalNoOfQuestions: FieldRef<"Contest", 'Int'>
    readonly resultPublished: FieldRef<"Contest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Contest findUnique
   */
  export type ContestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findUniqueOrThrow
   */
  export type ContestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findFirst
   */
  export type ContestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findFirstOrThrow
   */
  export type ContestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findMany
   */
  export type ContestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contests to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest create
   */
  export type ContestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to create a Contest.
     */
    data: XOR<ContestCreateInput, ContestUncheckedCreateInput>
  }

  /**
   * Contest createMany
   */
  export type ContestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contests.
     */
    data: ContestCreateManyInput | ContestCreateManyInput[]
  }

  /**
   * Contest update
   */
  export type ContestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to update a Contest.
     */
    data: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
    /**
     * Choose, which Contest to update.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest updateMany
   */
  export type ContestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contests.
     */
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyInput>
    /**
     * Filter which Contests to update
     */
    where?: ContestWhereInput
  }

  /**
   * Contest upsert
   */
  export type ContestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The filter to search for the Contest to update in case it exists.
     */
    where: ContestWhereUniqueInput
    /**
     * In case the Contest found by the `where` argument doesn't exist, create a new Contest with this data.
     */
    create: XOR<ContestCreateInput, ContestUncheckedCreateInput>
    /**
     * In case the Contest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
  }

  /**
   * Contest delete
   */
  export type ContestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter which Contest to delete.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest deleteMany
   */
  export type ContestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contests to delete
     */
    where?: ContestWhereInput
  }

  /**
   * Contest findRaw
   */
  export type ContestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contest aggregateRaw
   */
  export type ContestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contest.question
   */
  export type Contest$questionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questions
     */
    select?: QuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questions
     */
    omit?: QuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionsInclude<ExtArgs> | null
    where?: QuestionsWhereInput
    orderBy?: QuestionsOrderByWithRelationInput | QuestionsOrderByWithRelationInput[]
    cursor?: QuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionsScalarFieldEnum | QuestionsScalarFieldEnum[]
  }

  /**
   * Contest without action
   */
  export type ContestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rno: 'rno',
    uname: 'uname',
    leetCodeName: 'leetCodeName',
    salt: 'salt',
    hash: 'hash',
    timeOfLastSolve: 'timeOfLastSolve'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TopicsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    notes: 'notes'
  };

  export type TopicsScalarFieldEnum = (typeof TopicsScalarFieldEnum)[keyof typeof TopicsScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    miniDescription: 'miniDescription',
    topicId: 'topicId',
    noOfHiddenTestCases: 'noOfHiddenTestCases',
    noOfExternalTestCases: 'noOfExternalTestCases',
    difficulty: 'difficulty',
    pointsPerTestCaseSolved: 'pointsPerTestCaseSolved',
    type: 'type',
    leetCodeLink: 'leetCodeLink',
    leetCodeTitle: 'leetCodeTitle',
    timeToSolveInMinutes: 'timeToSolveInMinutes',
    contestId: 'contestId',
    JavaImports: 'JavaImports',
    JavaBoilerCode: 'JavaBoilerCode',
    CBoilerCode: 'CBoilerCode',
    CppBoilerCode: 'CppBoilerCode',
    PythonBoilerCode: 'PythonBoilerCode'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const TestCaseScalarFieldEnum: {
    id: 'id',
    inputString: 'inputString',
    outputString: 'outputString',
    questionId: 'questionId',
    type: 'type'
  };

  export type TestCaseScalarFieldEnum = (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    studentId: 'studentId',
    startTime: 'startTime',
    maxTimeToSolve: 'maxTimeToSolve',
    submittedOn: 'submittedOn',
    status: 'status',
    noOfCasesPassed: 'noOfCasesPassed',
    pointsSecured: 'pointsSecured',
    type: 'type',
    output1: 'output1',
    output2: 'output2',
    isFinal: 'isFinal',
    code: 'code',
    leetCodeLink: 'leetCodeLink',
    language: 'language',
    savedCCode: 'savedCCode',
    savedCppCode: 'savedCppCode',
    savedJavaCode: 'savedJavaCode',
    savedPythonCode: 'savedPythonCode',
    failedForInput: 'failedForInput',
    isChecked: 'isChecked',
    output1Status: 'output1Status',
    output2Status: 'output2Status'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const AchievementsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description'
  };

  export type AchievementsScalarFieldEnum = (typeof AchievementsScalarFieldEnum)[keyof typeof AchievementsScalarFieldEnum]


  export const StudentAchievementsScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    achievementId: 'achievementId',
    count: 'count'
  };

  export type StudentAchievementsScalarFieldEnum = (typeof StudentAchievementsScalarFieldEnum)[keyof typeof StudentAchievementsScalarFieldEnum]


  export const OTPStudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rno: 'rno',
    uname: 'uname',
    salt: 'salt',
    hash: 'hash',
    leetCodeProfile: 'leetCodeProfile',
    otp: 'otp',
    expiry: 'expiry',
    status: 'status'
  };

  export type OTPStudentScalarFieldEnum = (typeof OTPStudentScalarFieldEnum)[keyof typeof OTPStudentScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    session: 'session',
    expiry: 'expiry'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const DiscussionsScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    type: 'type',
    questionId: 'questionId',
    repliedTo: 'repliedTo',
    timeOfComment: 'timeOfComment'
  };

  export type DiscussionsScalarFieldEnum = (typeof DiscussionsScalarFieldEnum)[keyof typeof DiscussionsScalarFieldEnum]


  export const ContestScalarFieldEnum: {
    id: 'id',
    miniDescription: 'miniDescription',
    title: 'title',
    opensOn: 'opensOn',
    closesOn: 'closesOn',
    timeToSolveInMinutes: 'timeToSolveInMinutes',
    totalPoints: 'totalPoints',
    totalNoOfQuestions: 'totalNoOfQuestions',
    resultPublished: 'resultPublished'
  };

  export type ContestScalarFieldEnum = (typeof ContestScalarFieldEnum)[keyof typeof ContestScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    rno?: StringFilter<"Student"> | string
    uname?: StringFilter<"Student"> | string
    leetCodeName?: StringNullableFilter<"Student"> | string | null
    salt?: StringFilter<"Student"> | string
    hash?: StringFilter<"Student"> | string
    timeOfLastSolve?: DateTimeNullableFilter<"Student"> | Date | string | null
    submission?: SubmissionListRelationFilter
    studentAchievements?: StudentAchievementsListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    discussion?: DiscussionsListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    leetCodeName?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    timeOfLastSolve?: SortOrder
    submission?: SubmissionOrderByRelationAggregateInput
    studentAchievements?: StudentAchievementsOrderByRelationAggregateInput
    session?: SessionOrderByWithRelationInput
    discussion?: DiscussionsOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rno?: string
    uname?: string
    leetCodeName?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    salt?: StringFilter<"Student"> | string
    hash?: StringFilter<"Student"> | string
    timeOfLastSolve?: DateTimeNullableFilter<"Student"> | Date | string | null
    submission?: SubmissionListRelationFilter
    studentAchievements?: StudentAchievementsListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
    discussion?: DiscussionsListRelationFilter
  }, "id" | "rno" | "uname" | "leetCodeName">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    leetCodeName?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    timeOfLastSolve?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    rno?: StringWithAggregatesFilter<"Student"> | string
    uname?: StringWithAggregatesFilter<"Student"> | string
    leetCodeName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    salt?: StringWithAggregatesFilter<"Student"> | string
    hash?: StringWithAggregatesFilter<"Student"> | string
    timeOfLastSolve?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
  }

  export type TopicsWhereInput = {
    AND?: TopicsWhereInput | TopicsWhereInput[]
    OR?: TopicsWhereInput[]
    NOT?: TopicsWhereInput | TopicsWhereInput[]
    id?: StringFilter<"Topics"> | string
    name?: StringFilter<"Topics"> | string
    description?: StringNullableFilter<"Topics"> | string | null
    notes?: StringNullableFilter<"Topics"> | string | null
    question?: QuestionsListRelationFilter
  }

  export type TopicsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    question?: QuestionsOrderByRelationAggregateInput
  }

  export type TopicsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    notes?: string
    AND?: TopicsWhereInput | TopicsWhereInput[]
    OR?: TopicsWhereInput[]
    NOT?: TopicsWhereInput | TopicsWhereInput[]
    description?: StringNullableFilter<"Topics"> | string | null
    question?: QuestionsListRelationFilter
  }, "id" | "name" | "notes">

  export type TopicsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    notes?: SortOrder
    _count?: TopicsCountOrderByAggregateInput
    _max?: TopicsMaxOrderByAggregateInput
    _min?: TopicsMinOrderByAggregateInput
  }

  export type TopicsScalarWhereWithAggregatesInput = {
    AND?: TopicsScalarWhereWithAggregatesInput | TopicsScalarWhereWithAggregatesInput[]
    OR?: TopicsScalarWhereWithAggregatesInput[]
    NOT?: TopicsScalarWhereWithAggregatesInput | TopicsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topics"> | string
    name?: StringWithAggregatesFilter<"Topics"> | string
    description?: StringNullableWithAggregatesFilter<"Topics"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Topics"> | string | null
  }

  export type QuestionsWhereInput = {
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    id?: StringFilter<"Questions"> | string
    title?: StringFilter<"Questions"> | string
    description?: StringFilter<"Questions"> | string
    miniDescription?: StringNullableFilter<"Questions"> | string | null
    topicId?: StringNullableFilter<"Questions"> | string | null
    noOfHiddenTestCases?: IntFilter<"Questions"> | number
    noOfExternalTestCases?: IntFilter<"Questions"> | number
    difficulty?: StringFilter<"Questions"> | string
    pointsPerTestCaseSolved?: IntFilter<"Questions"> | number
    type?: StringFilter<"Questions"> | string
    leetCodeLink?: StringNullableFilter<"Questions"> | string | null
    leetCodeTitle?: StringNullableFilter<"Questions"> | string | null
    timeToSolveInMinutes?: IntNullableFilter<"Questions"> | number | null
    contestId?: StringNullableFilter<"Questions"> | string | null
    JavaImports?: StringFilter<"Questions"> | string
    JavaBoilerCode?: StringFilter<"Questions"> | string
    CBoilerCode?: StringFilter<"Questions"> | string
    CppBoilerCode?: StringFilter<"Questions"> | string
    PythonBoilerCode?: StringFilter<"Questions"> | string
    testCase?: TestCaseListRelationFilter
    submission?: SubmissionListRelationFilter
    discussion?: DiscussionsListRelationFilter
    topics?: XOR<TopicsNullableScalarRelationFilter, TopicsWhereInput> | null
    contest?: XOR<ContestNullableScalarRelationFilter, ContestWhereInput> | null
  }

  export type QuestionsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    miniDescription?: SortOrder
    topicId?: SortOrder
    noOfHiddenTestCases?: SortOrder
    noOfExternalTestCases?: SortOrder
    difficulty?: SortOrder
    pointsPerTestCaseSolved?: SortOrder
    type?: SortOrder
    leetCodeLink?: SortOrder
    leetCodeTitle?: SortOrder
    timeToSolveInMinutes?: SortOrder
    contestId?: SortOrder
    JavaImports?: SortOrder
    JavaBoilerCode?: SortOrder
    CBoilerCode?: SortOrder
    CppBoilerCode?: SortOrder
    PythonBoilerCode?: SortOrder
    testCase?: TestCaseOrderByRelationAggregateInput
    submission?: SubmissionOrderByRelationAggregateInput
    discussion?: DiscussionsOrderByRelationAggregateInput
    topics?: TopicsOrderByWithRelationInput
    contest?: ContestOrderByWithRelationInput
  }

  export type QuestionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionsWhereInput | QuestionsWhereInput[]
    OR?: QuestionsWhereInput[]
    NOT?: QuestionsWhereInput | QuestionsWhereInput[]
    title?: StringFilter<"Questions"> | string
    description?: StringFilter<"Questions"> | string
    miniDescription?: StringNullableFilter<"Questions"> | string | null
    topicId?: StringNullableFilter<"Questions"> | string | null
    noOfHiddenTestCases?: IntFilter<"Questions"> | number
    noOfExternalTestCases?: IntFilter<"Questions"> | number
    difficulty?: StringFilter<"Questions"> | string
    pointsPerTestCaseSolved?: IntFilter<"Questions"> | number
    type?: StringFilter<"Questions"> | string
    leetCodeLink?: StringNullableFilter<"Questions"> | string | null
    leetCodeTitle?: StringNullableFilter<"Questions"> | string | null
    timeToSolveInMinutes?: IntNullableFilter<"Questions"> | number | null
    contestId?: StringNullableFilter<"Questions"> | string | null
    JavaImports?: StringFilter<"Questions"> | string
    JavaBoilerCode?: StringFilter<"Questions"> | string
    CBoilerCode?: StringFilter<"Questions"> | string
    CppBoilerCode?: StringFilter<"Questions"> | string
    PythonBoilerCode?: StringFilter<"Questions"> | string
    testCase?: TestCaseListRelationFilter
    submission?: SubmissionListRelationFilter
    discussion?: DiscussionsListRelationFilter
    topics?: XOR<TopicsNullableScalarRelationFilter, TopicsWhereInput> | null
    contest?: XOR<ContestNullableScalarRelationFilter, ContestWhereInput> | null
  }, "id">

  export type QuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    miniDescription?: SortOrder
    topicId?: SortOrder
    noOfHiddenTestCases?: SortOrder
    noOfExternalTestCases?: SortOrder
    difficulty?: SortOrder
    pointsPerTestCaseSolved?: SortOrder
    type?: SortOrder
    leetCodeLink?: SortOrder
    leetCodeTitle?: SortOrder
    timeToSolveInMinutes?: SortOrder
    contestId?: SortOrder
    JavaImports?: SortOrder
    JavaBoilerCode?: SortOrder
    CBoilerCode?: SortOrder
    CppBoilerCode?: SortOrder
    PythonBoilerCode?: SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _avg?: QuestionsAvgOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
    _sum?: QuestionsSumOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    OR?: QuestionsScalarWhereWithAggregatesInput[]
    NOT?: QuestionsScalarWhereWithAggregatesInput | QuestionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Questions"> | string
    title?: StringWithAggregatesFilter<"Questions"> | string
    description?: StringWithAggregatesFilter<"Questions"> | string
    miniDescription?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    topicId?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    noOfHiddenTestCases?: IntWithAggregatesFilter<"Questions"> | number
    noOfExternalTestCases?: IntWithAggregatesFilter<"Questions"> | number
    difficulty?: StringWithAggregatesFilter<"Questions"> | string
    pointsPerTestCaseSolved?: IntWithAggregatesFilter<"Questions"> | number
    type?: StringWithAggregatesFilter<"Questions"> | string
    leetCodeLink?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    leetCodeTitle?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    timeToSolveInMinutes?: IntNullableWithAggregatesFilter<"Questions"> | number | null
    contestId?: StringNullableWithAggregatesFilter<"Questions"> | string | null
    JavaImports?: StringWithAggregatesFilter<"Questions"> | string
    JavaBoilerCode?: StringWithAggregatesFilter<"Questions"> | string
    CBoilerCode?: StringWithAggregatesFilter<"Questions"> | string
    CppBoilerCode?: StringWithAggregatesFilter<"Questions"> | string
    PythonBoilerCode?: StringWithAggregatesFilter<"Questions"> | string
  }

  export type TestCaseWhereInput = {
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    id?: StringFilter<"TestCase"> | string
    inputString?: StringFilter<"TestCase"> | string
    outputString?: StringFilter<"TestCase"> | string
    questionId?: StringFilter<"TestCase"> | string
    type?: StringFilter<"TestCase"> | string
    questions?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
  }

  export type TestCaseOrderByWithRelationInput = {
    id?: SortOrder
    inputString?: SortOrder
    outputString?: SortOrder
    questionId?: SortOrder
    type?: SortOrder
    questions?: QuestionsOrderByWithRelationInput
  }

  export type TestCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    inputString?: StringFilter<"TestCase"> | string
    outputString?: StringFilter<"TestCase"> | string
    questionId?: StringFilter<"TestCase"> | string
    type?: StringFilter<"TestCase"> | string
    questions?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
  }, "id">

  export type TestCaseOrderByWithAggregationInput = {
    id?: SortOrder
    inputString?: SortOrder
    outputString?: SortOrder
    questionId?: SortOrder
    type?: SortOrder
    _count?: TestCaseCountOrderByAggregateInput
    _max?: TestCaseMaxOrderByAggregateInput
    _min?: TestCaseMinOrderByAggregateInput
  }

  export type TestCaseScalarWhereWithAggregatesInput = {
    AND?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    OR?: TestCaseScalarWhereWithAggregatesInput[]
    NOT?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestCase"> | string
    inputString?: StringWithAggregatesFilter<"TestCase"> | string
    outputString?: StringWithAggregatesFilter<"TestCase"> | string
    questionId?: StringWithAggregatesFilter<"TestCase"> | string
    type?: StringWithAggregatesFilter<"TestCase"> | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    questionId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    startTime?: DateTimeFilter<"Submission"> | Date | string
    maxTimeToSolve?: DateTimeFilter<"Submission"> | Date | string
    submittedOn?: DateTimeNullableFilter<"Submission"> | Date | string | null
    status?: StringFilter<"Submission"> | string
    noOfCasesPassed?: IntFilter<"Submission"> | number
    pointsSecured?: IntFilter<"Submission"> | number
    type?: StringFilter<"Submission"> | string
    output1?: StringNullableFilter<"Submission"> | string | null
    output2?: StringNullableFilter<"Submission"> | string | null
    isFinal?: StringFilter<"Submission"> | string
    code?: StringNullableFilter<"Submission"> | string | null
    leetCodeLink?: StringNullableFilter<"Submission"> | string | null
    language?: StringNullableFilter<"Submission"> | string | null
    savedCCode?: StringFilter<"Submission"> | string
    savedCppCode?: StringFilter<"Submission"> | string
    savedJavaCode?: StringFilter<"Submission"> | string
    savedPythonCode?: StringFilter<"Submission"> | string
    failedForInput?: StringNullableFilter<"Submission"> | string | null
    isChecked?: StringFilter<"Submission"> | string
    output1Status?: StringFilter<"Submission"> | string
    output2Status?: StringFilter<"Submission"> | string
    questions?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    maxTimeToSolve?: SortOrder
    submittedOn?: SortOrder
    status?: SortOrder
    noOfCasesPassed?: SortOrder
    pointsSecured?: SortOrder
    type?: SortOrder
    output1?: SortOrder
    output2?: SortOrder
    isFinal?: SortOrder
    code?: SortOrder
    leetCodeLink?: SortOrder
    language?: SortOrder
    savedCCode?: SortOrder
    savedCppCode?: SortOrder
    savedJavaCode?: SortOrder
    savedPythonCode?: SortOrder
    failedForInput?: SortOrder
    isChecked?: SortOrder
    output1Status?: SortOrder
    output2Status?: SortOrder
    questions?: QuestionsOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    questionId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    startTime?: DateTimeFilter<"Submission"> | Date | string
    maxTimeToSolve?: DateTimeFilter<"Submission"> | Date | string
    submittedOn?: DateTimeNullableFilter<"Submission"> | Date | string | null
    status?: StringFilter<"Submission"> | string
    noOfCasesPassed?: IntFilter<"Submission"> | number
    pointsSecured?: IntFilter<"Submission"> | number
    type?: StringFilter<"Submission"> | string
    output1?: StringNullableFilter<"Submission"> | string | null
    output2?: StringNullableFilter<"Submission"> | string | null
    isFinal?: StringFilter<"Submission"> | string
    code?: StringNullableFilter<"Submission"> | string | null
    leetCodeLink?: StringNullableFilter<"Submission"> | string | null
    language?: StringNullableFilter<"Submission"> | string | null
    savedCCode?: StringFilter<"Submission"> | string
    savedCppCode?: StringFilter<"Submission"> | string
    savedJavaCode?: StringFilter<"Submission"> | string
    savedPythonCode?: StringFilter<"Submission"> | string
    failedForInput?: StringNullableFilter<"Submission"> | string | null
    isChecked?: StringFilter<"Submission"> | string
    output1Status?: StringFilter<"Submission"> | string
    output2Status?: StringFilter<"Submission"> | string
    questions?: XOR<QuestionsScalarRelationFilter, QuestionsWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    maxTimeToSolve?: SortOrder
    submittedOn?: SortOrder
    status?: SortOrder
    noOfCasesPassed?: SortOrder
    pointsSecured?: SortOrder
    type?: SortOrder
    output1?: SortOrder
    output2?: SortOrder
    isFinal?: SortOrder
    code?: SortOrder
    leetCodeLink?: SortOrder
    language?: SortOrder
    savedCCode?: SortOrder
    savedCppCode?: SortOrder
    savedJavaCode?: SortOrder
    savedPythonCode?: SortOrder
    failedForInput?: SortOrder
    isChecked?: SortOrder
    output1Status?: SortOrder
    output2Status?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    questionId?: StringWithAggregatesFilter<"Submission"> | string
    studentId?: StringWithAggregatesFilter<"Submission"> | string
    startTime?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    maxTimeToSolve?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    submittedOn?: DateTimeNullableWithAggregatesFilter<"Submission"> | Date | string | null
    status?: StringWithAggregatesFilter<"Submission"> | string
    noOfCasesPassed?: IntWithAggregatesFilter<"Submission"> | number
    pointsSecured?: IntWithAggregatesFilter<"Submission"> | number
    type?: StringWithAggregatesFilter<"Submission"> | string
    output1?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    output2?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    isFinal?: StringWithAggregatesFilter<"Submission"> | string
    code?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    leetCodeLink?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    language?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    savedCCode?: StringWithAggregatesFilter<"Submission"> | string
    savedCppCode?: StringWithAggregatesFilter<"Submission"> | string
    savedJavaCode?: StringWithAggregatesFilter<"Submission"> | string
    savedPythonCode?: StringWithAggregatesFilter<"Submission"> | string
    failedForInput?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    isChecked?: StringWithAggregatesFilter<"Submission"> | string
    output1Status?: StringWithAggregatesFilter<"Submission"> | string
    output2Status?: StringWithAggregatesFilter<"Submission"> | string
  }

  export type AchievementsWhereInput = {
    AND?: AchievementsWhereInput | AchievementsWhereInput[]
    OR?: AchievementsWhereInput[]
    NOT?: AchievementsWhereInput | AchievementsWhereInput[]
    id?: StringFilter<"Achievements"> | string
    title?: StringFilter<"Achievements"> | string
    description?: StringNullableFilter<"Achievements"> | string | null
    studentAchievements?: StudentAchievementsListRelationFilter
  }

  export type AchievementsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    studentAchievements?: StudentAchievementsOrderByRelationAggregateInput
  }

  export type AchievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: AchievementsWhereInput | AchievementsWhereInput[]
    OR?: AchievementsWhereInput[]
    NOT?: AchievementsWhereInput | AchievementsWhereInput[]
    description?: StringNullableFilter<"Achievements"> | string | null
    studentAchievements?: StudentAchievementsListRelationFilter
  }, "id" | "title">

  export type AchievementsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    _count?: AchievementsCountOrderByAggregateInput
    _max?: AchievementsMaxOrderByAggregateInput
    _min?: AchievementsMinOrderByAggregateInput
  }

  export type AchievementsScalarWhereWithAggregatesInput = {
    AND?: AchievementsScalarWhereWithAggregatesInput | AchievementsScalarWhereWithAggregatesInput[]
    OR?: AchievementsScalarWhereWithAggregatesInput[]
    NOT?: AchievementsScalarWhereWithAggregatesInput | AchievementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievements"> | string
    title?: StringWithAggregatesFilter<"Achievements"> | string
    description?: StringNullableWithAggregatesFilter<"Achievements"> | string | null
  }

  export type StudentAchievementsWhereInput = {
    AND?: StudentAchievementsWhereInput | StudentAchievementsWhereInput[]
    OR?: StudentAchievementsWhereInput[]
    NOT?: StudentAchievementsWhereInput | StudentAchievementsWhereInput[]
    id?: StringFilter<"StudentAchievements"> | string
    studentId?: StringFilter<"StudentAchievements"> | string
    achievementId?: StringFilter<"StudentAchievements"> | string
    count?: IntFilter<"StudentAchievements"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    achievements?: XOR<AchievementsScalarRelationFilter, AchievementsWhereInput>
  }

  export type StudentAchievementsOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    count?: SortOrder
    student?: StudentOrderByWithRelationInput
    achievements?: AchievementsOrderByWithRelationInput
  }

  export type StudentAchievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentAchievementsWhereInput | StudentAchievementsWhereInput[]
    OR?: StudentAchievementsWhereInput[]
    NOT?: StudentAchievementsWhereInput | StudentAchievementsWhereInput[]
    studentId?: StringFilter<"StudentAchievements"> | string
    achievementId?: StringFilter<"StudentAchievements"> | string
    count?: IntFilter<"StudentAchievements"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    achievements?: XOR<AchievementsScalarRelationFilter, AchievementsWhereInput>
  }, "id">

  export type StudentAchievementsOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    count?: SortOrder
    _count?: StudentAchievementsCountOrderByAggregateInput
    _avg?: StudentAchievementsAvgOrderByAggregateInput
    _max?: StudentAchievementsMaxOrderByAggregateInput
    _min?: StudentAchievementsMinOrderByAggregateInput
    _sum?: StudentAchievementsSumOrderByAggregateInput
  }

  export type StudentAchievementsScalarWhereWithAggregatesInput = {
    AND?: StudentAchievementsScalarWhereWithAggregatesInput | StudentAchievementsScalarWhereWithAggregatesInput[]
    OR?: StudentAchievementsScalarWhereWithAggregatesInput[]
    NOT?: StudentAchievementsScalarWhereWithAggregatesInput | StudentAchievementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAchievements"> | string
    studentId?: StringWithAggregatesFilter<"StudentAchievements"> | string
    achievementId?: StringWithAggregatesFilter<"StudentAchievements"> | string
    count?: IntWithAggregatesFilter<"StudentAchievements"> | number
  }

  export type OTPStudentWhereInput = {
    AND?: OTPStudentWhereInput | OTPStudentWhereInput[]
    OR?: OTPStudentWhereInput[]
    NOT?: OTPStudentWhereInput | OTPStudentWhereInput[]
    id?: StringFilter<"OTPStudent"> | string
    name?: StringFilter<"OTPStudent"> | string
    rno?: StringFilter<"OTPStudent"> | string
    uname?: StringFilter<"OTPStudent"> | string
    salt?: StringFilter<"OTPStudent"> | string
    hash?: StringFilter<"OTPStudent"> | string
    leetCodeProfile?: StringNullableFilter<"OTPStudent"> | string | null
    otp?: StringFilter<"OTPStudent"> | string
    expiry?: DateTimeFilter<"OTPStudent"> | Date | string
    status?: StringFilter<"OTPStudent"> | string
  }

  export type OTPStudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    leetCodeProfile?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
  }

  export type OTPStudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rno?: string
    uname?: string
    AND?: OTPStudentWhereInput | OTPStudentWhereInput[]
    OR?: OTPStudentWhereInput[]
    NOT?: OTPStudentWhereInput | OTPStudentWhereInput[]
    name?: StringFilter<"OTPStudent"> | string
    salt?: StringFilter<"OTPStudent"> | string
    hash?: StringFilter<"OTPStudent"> | string
    leetCodeProfile?: StringNullableFilter<"OTPStudent"> | string | null
    otp?: StringFilter<"OTPStudent"> | string
    expiry?: DateTimeFilter<"OTPStudent"> | Date | string
    status?: StringFilter<"OTPStudent"> | string
  }, "id" | "rno" | "uname">

  export type OTPStudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    leetCodeProfile?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
    _count?: OTPStudentCountOrderByAggregateInput
    _max?: OTPStudentMaxOrderByAggregateInput
    _min?: OTPStudentMinOrderByAggregateInput
  }

  export type OTPStudentScalarWhereWithAggregatesInput = {
    AND?: OTPStudentScalarWhereWithAggregatesInput | OTPStudentScalarWhereWithAggregatesInput[]
    OR?: OTPStudentScalarWhereWithAggregatesInput[]
    NOT?: OTPStudentScalarWhereWithAggregatesInput | OTPStudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTPStudent"> | string
    name?: StringWithAggregatesFilter<"OTPStudent"> | string
    rno?: StringWithAggregatesFilter<"OTPStudent"> | string
    uname?: StringWithAggregatesFilter<"OTPStudent"> | string
    salt?: StringWithAggregatesFilter<"OTPStudent"> | string
    hash?: StringWithAggregatesFilter<"OTPStudent"> | string
    leetCodeProfile?: StringNullableWithAggregatesFilter<"OTPStudent"> | string | null
    otp?: StringWithAggregatesFilter<"OTPStudent"> | string
    expiry?: DateTimeWithAggregatesFilter<"OTPStudent"> | Date | string
    status?: StringWithAggregatesFilter<"OTPStudent"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    studentId?: StringFilter<"Session"> | string
    session?: StringFilter<"Session"> | string
    expiry?: DateTimeFilter<"Session"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    session?: StringFilter<"Session"> | string
    expiry?: DateTimeFilter<"Session"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    studentId?: StringWithAggregatesFilter<"Session"> | string
    session?: StringWithAggregatesFilter<"Session"> | string
    expiry?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type DiscussionsWhereInput = {
    AND?: DiscussionsWhereInput | DiscussionsWhereInput[]
    OR?: DiscussionsWhereInput[]
    NOT?: DiscussionsWhereInput | DiscussionsWhereInput[]
    id?: StringFilter<"Discussions"> | string
    studentId?: StringFilter<"Discussions"> | string
    type?: StringFilter<"Discussions"> | string
    questionId?: StringNullableFilter<"Discussions"> | string | null
    repliedTo?: StringNullableFilter<"Discussions"> | string | null
    timeOfComment?: DateTimeFilter<"Discussions"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    question?: XOR<QuestionsNullableScalarRelationFilter, QuestionsWhereInput> | null
    toWhomIReply?: XOR<DiscussionsNullableScalarRelationFilter, DiscussionsWhereInput> | null
    repliesIGet?: DiscussionsListRelationFilter
  }

  export type DiscussionsOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    type?: SortOrder
    questionId?: SortOrder
    repliedTo?: SortOrder
    timeOfComment?: SortOrder
    student?: StudentOrderByWithRelationInput
    question?: QuestionsOrderByWithRelationInput
    toWhomIReply?: DiscussionsOrderByWithRelationInput
    repliesIGet?: DiscussionsOrderByRelationAggregateInput
  }

  export type DiscussionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscussionsWhereInput | DiscussionsWhereInput[]
    OR?: DiscussionsWhereInput[]
    NOT?: DiscussionsWhereInput | DiscussionsWhereInput[]
    studentId?: StringFilter<"Discussions"> | string
    type?: StringFilter<"Discussions"> | string
    questionId?: StringNullableFilter<"Discussions"> | string | null
    repliedTo?: StringNullableFilter<"Discussions"> | string | null
    timeOfComment?: DateTimeFilter<"Discussions"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    question?: XOR<QuestionsNullableScalarRelationFilter, QuestionsWhereInput> | null
    toWhomIReply?: XOR<DiscussionsNullableScalarRelationFilter, DiscussionsWhereInput> | null
    repliesIGet?: DiscussionsListRelationFilter
  }, "id">

  export type DiscussionsOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    type?: SortOrder
    questionId?: SortOrder
    repliedTo?: SortOrder
    timeOfComment?: SortOrder
    _count?: DiscussionsCountOrderByAggregateInput
    _max?: DiscussionsMaxOrderByAggregateInput
    _min?: DiscussionsMinOrderByAggregateInput
  }

  export type DiscussionsScalarWhereWithAggregatesInput = {
    AND?: DiscussionsScalarWhereWithAggregatesInput | DiscussionsScalarWhereWithAggregatesInput[]
    OR?: DiscussionsScalarWhereWithAggregatesInput[]
    NOT?: DiscussionsScalarWhereWithAggregatesInput | DiscussionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discussions"> | string
    studentId?: StringWithAggregatesFilter<"Discussions"> | string
    type?: StringWithAggregatesFilter<"Discussions"> | string
    questionId?: StringNullableWithAggregatesFilter<"Discussions"> | string | null
    repliedTo?: StringNullableWithAggregatesFilter<"Discussions"> | string | null
    timeOfComment?: DateTimeWithAggregatesFilter<"Discussions"> | Date | string
  }

  export type ContestWhereInput = {
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    id?: StringFilter<"Contest"> | string
    miniDescription?: StringNullableFilter<"Contest"> | string | null
    title?: StringFilter<"Contest"> | string
    opensOn?: DateTimeFilter<"Contest"> | Date | string
    closesOn?: DateTimeFilter<"Contest"> | Date | string
    timeToSolveInMinutes?: IntFilter<"Contest"> | number
    totalPoints?: IntFilter<"Contest"> | number
    totalNoOfQuestions?: IntFilter<"Contest"> | number
    resultPublished?: IntFilter<"Contest"> | number
    question?: QuestionsListRelationFilter
  }

  export type ContestOrderByWithRelationInput = {
    id?: SortOrder
    miniDescription?: SortOrder
    title?: SortOrder
    opensOn?: SortOrder
    closesOn?: SortOrder
    timeToSolveInMinutes?: SortOrder
    totalPoints?: SortOrder
    totalNoOfQuestions?: SortOrder
    resultPublished?: SortOrder
    question?: QuestionsOrderByRelationAggregateInput
  }

  export type ContestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    miniDescription?: StringNullableFilter<"Contest"> | string | null
    opensOn?: DateTimeFilter<"Contest"> | Date | string
    closesOn?: DateTimeFilter<"Contest"> | Date | string
    timeToSolveInMinutes?: IntFilter<"Contest"> | number
    totalPoints?: IntFilter<"Contest"> | number
    totalNoOfQuestions?: IntFilter<"Contest"> | number
    resultPublished?: IntFilter<"Contest"> | number
    question?: QuestionsListRelationFilter
  }, "id" | "title">

  export type ContestOrderByWithAggregationInput = {
    id?: SortOrder
    miniDescription?: SortOrder
    title?: SortOrder
    opensOn?: SortOrder
    closesOn?: SortOrder
    timeToSolveInMinutes?: SortOrder
    totalPoints?: SortOrder
    totalNoOfQuestions?: SortOrder
    resultPublished?: SortOrder
    _count?: ContestCountOrderByAggregateInput
    _avg?: ContestAvgOrderByAggregateInput
    _max?: ContestMaxOrderByAggregateInput
    _min?: ContestMinOrderByAggregateInput
    _sum?: ContestSumOrderByAggregateInput
  }

  export type ContestScalarWhereWithAggregatesInput = {
    AND?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    OR?: ContestScalarWhereWithAggregatesInput[]
    NOT?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contest"> | string
    miniDescription?: StringNullableWithAggregatesFilter<"Contest"> | string | null
    title?: StringWithAggregatesFilter<"Contest"> | string
    opensOn?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    closesOn?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    timeToSolveInMinutes?: IntWithAggregatesFilter<"Contest"> | number
    totalPoints?: IntWithAggregatesFilter<"Contest"> | number
    totalNoOfQuestions?: IntWithAggregatesFilter<"Contest"> | number
    resultPublished?: IntWithAggregatesFilter<"Contest"> | number
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    submission?: SubmissionCreateNestedManyWithoutStudentInput
    studentAchievements?: StudentAchievementsCreateNestedManyWithoutStudentInput
    session?: SessionCreateNestedOneWithoutStudentInput
    discussion?: DiscussionsCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    submission?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    studentAchievements?: StudentAchievementsUncheckedCreateNestedManyWithoutStudentInput
    session?: SessionUncheckedCreateNestedOneWithoutStudentInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUpdateManyWithoutStudentNestedInput
    studentAchievements?: StudentAchievementsUpdateManyWithoutStudentNestedInput
    session?: SessionUpdateOneWithoutStudentNestedInput
    discussion?: DiscussionsUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    studentAchievements?: StudentAchievementsUncheckedUpdateManyWithoutStudentNestedInput
    session?: SessionUncheckedUpdateOneWithoutStudentNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TopicsCreateInput = {
    id?: string
    name: string
    description?: string | null
    notes?: string | null
    question?: QuestionsCreateNestedManyWithoutTopicsInput
  }

  export type TopicsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    notes?: string | null
    question?: QuestionsUncheckedCreateNestedManyWithoutTopicsInput
  }

  export type TopicsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    question?: QuestionsUpdateManyWithoutTopicsNestedInput
  }

  export type TopicsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    question?: QuestionsUncheckedUpdateManyWithoutTopicsNestedInput
  }

  export type TopicsCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    notes?: string | null
  }

  export type TopicsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionsCreateInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseCreateNestedManyWithoutQuestionsInput
    submission?: SubmissionCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsCreateNestedManyWithoutQuestionInput
    topics?: TopicsCreateNestedOneWithoutQuestionInput
    contest?: ContestCreateNestedOneWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    topicId?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    contestId?: string | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseUncheckedCreateNestedManyWithoutQuestionsInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUpdateManyWithoutQuestionsNestedInput
    submission?: SubmissionUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUpdateManyWithoutQuestionNestedInput
    topics?: TopicsUpdateOneWithoutQuestionNestedInput
    contest?: ContestUpdateOneWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUncheckedUpdateManyWithoutQuestionsNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsCreateManyInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    topicId?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    contestId?: string | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
  }

  export type QuestionsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
  }

  export type TestCaseCreateInput = {
    id?: string
    inputString: string
    outputString: string
    type?: string
    questions: QuestionsCreateNestedOneWithoutTestCaseInput
  }

  export type TestCaseUncheckedCreateInput = {
    id?: string
    inputString: string
    outputString: string
    questionId: string
    type?: string
  }

  export type TestCaseUpdateInput = {
    inputString?: StringFieldUpdateOperationsInput | string
    outputString?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    questions?: QuestionsUpdateOneRequiredWithoutTestCaseNestedInput
  }

  export type TestCaseUncheckedUpdateInput = {
    inputString?: StringFieldUpdateOperationsInput | string
    outputString?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TestCaseCreateManyInput = {
    id?: string
    inputString: string
    outputString: string
    questionId: string
    type?: string
  }

  export type TestCaseUpdateManyMutationInput = {
    inputString?: StringFieldUpdateOperationsInput | string
    outputString?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TestCaseUncheckedUpdateManyInput = {
    inputString?: StringFieldUpdateOperationsInput | string
    outputString?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateInput = {
    id?: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
    questions: QuestionsCreateNestedOneWithoutSubmissionInput
    student: StudentCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    questionId: string
    studentId: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
  }

  export type SubmissionUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
    questions?: QuestionsUpdateOneRequiredWithoutSubmissionNestedInput
    student?: StudentUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    questionId: string
    studentId: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
  }

  export type SubmissionUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
  }

  export type AchievementsCreateInput = {
    id?: string
    title: string
    description?: string | null
    studentAchievements?: StudentAchievementsCreateNestedManyWithoutAchievementsInput
  }

  export type AchievementsUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    studentAchievements?: StudentAchievementsUncheckedCreateNestedManyWithoutAchievementsInput
  }

  export type AchievementsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    studentAchievements?: StudentAchievementsUpdateManyWithoutAchievementsNestedInput
  }

  export type AchievementsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    studentAchievements?: StudentAchievementsUncheckedUpdateManyWithoutAchievementsNestedInput
  }

  export type AchievementsCreateManyInput = {
    id?: string
    title: string
    description?: string | null
  }

  export type AchievementsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentAchievementsCreateInput = {
    id?: string
    count: number
    student: StudentCreateNestedOneWithoutStudentAchievementsInput
    achievements: AchievementsCreateNestedOneWithoutStudentAchievementsInput
  }

  export type StudentAchievementsUncheckedCreateInput = {
    id?: string
    studentId: string
    achievementId: string
    count: number
  }

  export type StudentAchievementsUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutStudentAchievementsNestedInput
    achievements?: AchievementsUpdateOneRequiredWithoutStudentAchievementsNestedInput
  }

  export type StudentAchievementsUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAchievementsCreateManyInput = {
    id?: string
    studentId: string
    achievementId: string
    count: number
  }

  export type StudentAchievementsUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAchievementsUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type OTPStudentCreateInput = {
    id?: string
    name: string
    rno: string
    uname: string
    salt: string
    hash: string
    leetCodeProfile?: string | null
    otp: string
    expiry: Date | string
    status?: string
  }

  export type OTPStudentUncheckedCreateInput = {
    id?: string
    name: string
    rno: string
    uname: string
    salt: string
    hash: string
    leetCodeProfile?: string | null
    otp: string
    expiry: Date | string
    status?: string
  }

  export type OTPStudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    leetCodeProfile?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OTPStudentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    leetCodeProfile?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OTPStudentCreateManyInput = {
    id?: string
    name: string
    rno: string
    uname: string
    salt: string
    hash: string
    leetCodeProfile?: string | null
    otp: string
    expiry: Date | string
    status?: string
  }

  export type OTPStudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    leetCodeProfile?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OTPStudentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    leetCodeProfile?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id?: string
    session: string
    expiry: Date | string
    student: StudentCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    studentId: string
    session: string
    expiry: Date | string
  }

  export type SessionUpdateInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    studentId: string
    session: string
    expiry: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionsCreateInput = {
    id?: string
    type?: string
    timeOfComment: Date | string
    student: StudentCreateNestedOneWithoutDiscussionInput
    question?: QuestionsCreateNestedOneWithoutDiscussionInput
    toWhomIReply?: DiscussionsCreateNestedOneWithoutRepliesIGetInput
    repliesIGet?: DiscussionsCreateNestedManyWithoutToWhomIReplyInput
  }

  export type DiscussionsUncheckedCreateInput = {
    id?: string
    studentId: string
    type?: string
    questionId?: string | null
    repliedTo?: string | null
    timeOfComment: Date | string
    repliesIGet?: DiscussionsUncheckedCreateNestedManyWithoutToWhomIReplyInput
  }

  export type DiscussionsUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutDiscussionNestedInput
    question?: QuestionsUpdateOneWithoutDiscussionNestedInput
    toWhomIReply?: DiscussionsUpdateOneWithoutRepliesIGetNestedInput
    repliesIGet?: DiscussionsUpdateManyWithoutToWhomIReplyNestedInput
  }

  export type DiscussionsUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    repliedTo?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    repliesIGet?: DiscussionsUncheckedUpdateManyWithoutToWhomIReplyNestedInput
  }

  export type DiscussionsCreateManyInput = {
    id?: string
    studentId: string
    type?: string
    questionId?: string | null
    repliedTo?: string | null
    timeOfComment: Date | string
  }

  export type DiscussionsUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionsUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    repliedTo?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestCreateInput = {
    id?: string
    miniDescription?: string | null
    title: string
    opensOn: Date | string
    closesOn: Date | string
    timeToSolveInMinutes: number
    totalPoints: number
    totalNoOfQuestions: number
    resultPublished?: number
    question?: QuestionsCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateInput = {
    id?: string
    miniDescription?: string | null
    title: string
    opensOn: Date | string
    closesOn: Date | string
    timeToSolveInMinutes: number
    totalPoints: number
    totalNoOfQuestions: number
    resultPublished?: number
    question?: QuestionsUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestUpdateInput = {
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    opensOn?: DateTimeFieldUpdateOperationsInput | Date | string
    closesOn?: DateTimeFieldUpdateOperationsInput | Date | string
    timeToSolveInMinutes?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    totalNoOfQuestions?: IntFieldUpdateOperationsInput | number
    resultPublished?: IntFieldUpdateOperationsInput | number
    question?: QuestionsUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateInput = {
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    opensOn?: DateTimeFieldUpdateOperationsInput | Date | string
    closesOn?: DateTimeFieldUpdateOperationsInput | Date | string
    timeToSolveInMinutes?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    totalNoOfQuestions?: IntFieldUpdateOperationsInput | number
    resultPublished?: IntFieldUpdateOperationsInput | number
    question?: QuestionsUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestCreateManyInput = {
    id?: string
    miniDescription?: string | null
    title: string
    opensOn: Date | string
    closesOn: Date | string
    timeToSolveInMinutes: number
    totalPoints: number
    totalNoOfQuestions: number
    resultPublished?: number
  }

  export type ContestUpdateManyMutationInput = {
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    opensOn?: DateTimeFieldUpdateOperationsInput | Date | string
    closesOn?: DateTimeFieldUpdateOperationsInput | Date | string
    timeToSolveInMinutes?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    totalNoOfQuestions?: IntFieldUpdateOperationsInput | number
    resultPublished?: IntFieldUpdateOperationsInput | number
  }

  export type ContestUncheckedUpdateManyInput = {
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    opensOn?: DateTimeFieldUpdateOperationsInput | Date | string
    closesOn?: DateTimeFieldUpdateOperationsInput | Date | string
    timeToSolveInMinutes?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    totalNoOfQuestions?: IntFieldUpdateOperationsInput | number
    resultPublished?: IntFieldUpdateOperationsInput | number
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type StudentAchievementsListRelationFilter = {
    every?: StudentAchievementsWhereInput
    some?: StudentAchievementsWhereInput
    none?: StudentAchievementsWhereInput
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type DiscussionsListRelationFilter = {
    every?: DiscussionsWhereInput
    some?: DiscussionsWhereInput
    none?: DiscussionsWhereInput
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentAchievementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscussionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    leetCodeName?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    timeOfLastSolve?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    leetCodeName?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    timeOfLastSolve?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    leetCodeName?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    timeOfLastSolve?: SortOrder
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type QuestionsListRelationFilter = {
    every?: QuestionsWhereInput
    some?: QuestionsWhereInput
    none?: QuestionsWhereInput
  }

  export type QuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    notes?: SortOrder
  }

  export type TopicsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    notes?: SortOrder
  }

  export type TopicsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    notes?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type TestCaseListRelationFilter = {
    every?: TestCaseWhereInput
    some?: TestCaseWhereInput
    none?: TestCaseWhereInput
  }

  export type TopicsNullableScalarRelationFilter = {
    is?: TopicsWhereInput | null
    isNot?: TopicsWhereInput | null
  }

  export type ContestNullableScalarRelationFilter = {
    is?: ContestWhereInput | null
    isNot?: ContestWhereInput | null
  }

  export type TestCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    miniDescription?: SortOrder
    topicId?: SortOrder
    noOfHiddenTestCases?: SortOrder
    noOfExternalTestCases?: SortOrder
    difficulty?: SortOrder
    pointsPerTestCaseSolved?: SortOrder
    type?: SortOrder
    leetCodeLink?: SortOrder
    leetCodeTitle?: SortOrder
    timeToSolveInMinutes?: SortOrder
    contestId?: SortOrder
    JavaImports?: SortOrder
    JavaBoilerCode?: SortOrder
    CBoilerCode?: SortOrder
    CppBoilerCode?: SortOrder
    PythonBoilerCode?: SortOrder
  }

  export type QuestionsAvgOrderByAggregateInput = {
    noOfHiddenTestCases?: SortOrder
    noOfExternalTestCases?: SortOrder
    pointsPerTestCaseSolved?: SortOrder
    timeToSolveInMinutes?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    miniDescription?: SortOrder
    topicId?: SortOrder
    noOfHiddenTestCases?: SortOrder
    noOfExternalTestCases?: SortOrder
    difficulty?: SortOrder
    pointsPerTestCaseSolved?: SortOrder
    type?: SortOrder
    leetCodeLink?: SortOrder
    leetCodeTitle?: SortOrder
    timeToSolveInMinutes?: SortOrder
    contestId?: SortOrder
    JavaImports?: SortOrder
    JavaBoilerCode?: SortOrder
    CBoilerCode?: SortOrder
    CppBoilerCode?: SortOrder
    PythonBoilerCode?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    miniDescription?: SortOrder
    topicId?: SortOrder
    noOfHiddenTestCases?: SortOrder
    noOfExternalTestCases?: SortOrder
    difficulty?: SortOrder
    pointsPerTestCaseSolved?: SortOrder
    type?: SortOrder
    leetCodeLink?: SortOrder
    leetCodeTitle?: SortOrder
    timeToSolveInMinutes?: SortOrder
    contestId?: SortOrder
    JavaImports?: SortOrder
    JavaBoilerCode?: SortOrder
    CBoilerCode?: SortOrder
    CppBoilerCode?: SortOrder
    PythonBoilerCode?: SortOrder
  }

  export type QuestionsSumOrderByAggregateInput = {
    noOfHiddenTestCases?: SortOrder
    noOfExternalTestCases?: SortOrder
    pointsPerTestCaseSolved?: SortOrder
    timeToSolveInMinutes?: SortOrder
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
    isSet?: boolean
  }

  export type QuestionsScalarRelationFilter = {
    is?: QuestionsWhereInput
    isNot?: QuestionsWhereInput
  }

  export type TestCaseCountOrderByAggregateInput = {
    id?: SortOrder
    inputString?: SortOrder
    outputString?: SortOrder
    questionId?: SortOrder
    type?: SortOrder
  }

  export type TestCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    inputString?: SortOrder
    outputString?: SortOrder
    questionId?: SortOrder
    type?: SortOrder
  }

  export type TestCaseMinOrderByAggregateInput = {
    id?: SortOrder
    inputString?: SortOrder
    outputString?: SortOrder
    questionId?: SortOrder
    type?: SortOrder
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

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    maxTimeToSolve?: SortOrder
    submittedOn?: SortOrder
    status?: SortOrder
    noOfCasesPassed?: SortOrder
    pointsSecured?: SortOrder
    type?: SortOrder
    output1?: SortOrder
    output2?: SortOrder
    isFinal?: SortOrder
    code?: SortOrder
    leetCodeLink?: SortOrder
    language?: SortOrder
    savedCCode?: SortOrder
    savedCppCode?: SortOrder
    savedJavaCode?: SortOrder
    savedPythonCode?: SortOrder
    failedForInput?: SortOrder
    isChecked?: SortOrder
    output1Status?: SortOrder
    output2Status?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    noOfCasesPassed?: SortOrder
    pointsSecured?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    maxTimeToSolve?: SortOrder
    submittedOn?: SortOrder
    status?: SortOrder
    noOfCasesPassed?: SortOrder
    pointsSecured?: SortOrder
    type?: SortOrder
    output1?: SortOrder
    output2?: SortOrder
    isFinal?: SortOrder
    code?: SortOrder
    leetCodeLink?: SortOrder
    language?: SortOrder
    savedCCode?: SortOrder
    savedCppCode?: SortOrder
    savedJavaCode?: SortOrder
    savedPythonCode?: SortOrder
    failedForInput?: SortOrder
    isChecked?: SortOrder
    output1Status?: SortOrder
    output2Status?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    maxTimeToSolve?: SortOrder
    submittedOn?: SortOrder
    status?: SortOrder
    noOfCasesPassed?: SortOrder
    pointsSecured?: SortOrder
    type?: SortOrder
    output1?: SortOrder
    output2?: SortOrder
    isFinal?: SortOrder
    code?: SortOrder
    leetCodeLink?: SortOrder
    language?: SortOrder
    savedCCode?: SortOrder
    savedCppCode?: SortOrder
    savedJavaCode?: SortOrder
    savedPythonCode?: SortOrder
    failedForInput?: SortOrder
    isChecked?: SortOrder
    output1Status?: SortOrder
    output2Status?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    noOfCasesPassed?: SortOrder
    pointsSecured?: SortOrder
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

  export type AchievementsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type AchievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type AchievementsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type AchievementsScalarRelationFilter = {
    is?: AchievementsWhereInput
    isNot?: AchievementsWhereInput
  }

  export type StudentAchievementsCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    count?: SortOrder
  }

  export type StudentAchievementsAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type StudentAchievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    count?: SortOrder
  }

  export type StudentAchievementsMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    count?: SortOrder
  }

  export type StudentAchievementsSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type OTPStudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    leetCodeProfile?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
  }

  export type OTPStudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    leetCodeProfile?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
  }

  export type OTPStudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rno?: SortOrder
    uname?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    leetCodeProfile?: SortOrder
    otp?: SortOrder
    expiry?: SortOrder
    status?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    session?: SortOrder
    expiry?: SortOrder
  }

  export type QuestionsNullableScalarRelationFilter = {
    is?: QuestionsWhereInput | null
    isNot?: QuestionsWhereInput | null
  }

  export type DiscussionsNullableScalarRelationFilter = {
    is?: DiscussionsWhereInput | null
    isNot?: DiscussionsWhereInput | null
  }

  export type DiscussionsCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    type?: SortOrder
    questionId?: SortOrder
    repliedTo?: SortOrder
    timeOfComment?: SortOrder
  }

  export type DiscussionsMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    type?: SortOrder
    questionId?: SortOrder
    repliedTo?: SortOrder
    timeOfComment?: SortOrder
  }

  export type DiscussionsMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    type?: SortOrder
    questionId?: SortOrder
    repliedTo?: SortOrder
    timeOfComment?: SortOrder
  }

  export type ContestCountOrderByAggregateInput = {
    id?: SortOrder
    miniDescription?: SortOrder
    title?: SortOrder
    opensOn?: SortOrder
    closesOn?: SortOrder
    timeToSolveInMinutes?: SortOrder
    totalPoints?: SortOrder
    totalNoOfQuestions?: SortOrder
    resultPublished?: SortOrder
  }

  export type ContestAvgOrderByAggregateInput = {
    timeToSolveInMinutes?: SortOrder
    totalPoints?: SortOrder
    totalNoOfQuestions?: SortOrder
    resultPublished?: SortOrder
  }

  export type ContestMaxOrderByAggregateInput = {
    id?: SortOrder
    miniDescription?: SortOrder
    title?: SortOrder
    opensOn?: SortOrder
    closesOn?: SortOrder
    timeToSolveInMinutes?: SortOrder
    totalPoints?: SortOrder
    totalNoOfQuestions?: SortOrder
    resultPublished?: SortOrder
  }

  export type ContestMinOrderByAggregateInput = {
    id?: SortOrder
    miniDescription?: SortOrder
    title?: SortOrder
    opensOn?: SortOrder
    closesOn?: SortOrder
    timeToSolveInMinutes?: SortOrder
    totalPoints?: SortOrder
    totalNoOfQuestions?: SortOrder
    resultPublished?: SortOrder
  }

  export type ContestSumOrderByAggregateInput = {
    timeToSolveInMinutes?: SortOrder
    totalPoints?: SortOrder
    totalNoOfQuestions?: SortOrder
    resultPublished?: SortOrder
  }

  export type SubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type StudentAchievementsCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAchievementsCreateWithoutStudentInput, StudentAchievementsUncheckedCreateWithoutStudentInput> | StudentAchievementsCreateWithoutStudentInput[] | StudentAchievementsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAchievementsCreateOrConnectWithoutStudentInput | StudentAchievementsCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAchievementsCreateManyStudentInputEnvelope
    connect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
  }

  export type SessionCreateNestedOneWithoutStudentInput = {
    create?: XOR<SessionCreateWithoutStudentInput, SessionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SessionCreateOrConnectWithoutStudentInput
    connect?: SessionWhereUniqueInput
  }

  export type DiscussionsCreateNestedManyWithoutStudentInput = {
    create?: XOR<DiscussionsCreateWithoutStudentInput, DiscussionsUncheckedCreateWithoutStudentInput> | DiscussionsCreateWithoutStudentInput[] | DiscussionsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutStudentInput | DiscussionsCreateOrConnectWithoutStudentInput[]
    createMany?: DiscussionsCreateManyStudentInputEnvelope
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type StudentAchievementsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentAchievementsCreateWithoutStudentInput, StudentAchievementsUncheckedCreateWithoutStudentInput> | StudentAchievementsCreateWithoutStudentInput[] | StudentAchievementsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAchievementsCreateOrConnectWithoutStudentInput | StudentAchievementsCreateOrConnectWithoutStudentInput[]
    createMany?: StudentAchievementsCreateManyStudentInputEnvelope
    connect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<SessionCreateWithoutStudentInput, SessionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SessionCreateOrConnectWithoutStudentInput
    connect?: SessionWhereUniqueInput
  }

  export type DiscussionsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<DiscussionsCreateWithoutStudentInput, DiscussionsUncheckedCreateWithoutStudentInput> | DiscussionsCreateWithoutStudentInput[] | DiscussionsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutStudentInput | DiscussionsCreateOrConnectWithoutStudentInput[]
    createMany?: DiscussionsCreateManyStudentInputEnvelope
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type SubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type StudentAchievementsUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAchievementsCreateWithoutStudentInput, StudentAchievementsUncheckedCreateWithoutStudentInput> | StudentAchievementsCreateWithoutStudentInput[] | StudentAchievementsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAchievementsCreateOrConnectWithoutStudentInput | StudentAchievementsCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAchievementsUpsertWithWhereUniqueWithoutStudentInput | StudentAchievementsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAchievementsCreateManyStudentInputEnvelope
    set?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    disconnect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    delete?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    connect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    update?: StudentAchievementsUpdateWithWhereUniqueWithoutStudentInput | StudentAchievementsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAchievementsUpdateManyWithWhereWithoutStudentInput | StudentAchievementsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAchievementsScalarWhereInput | StudentAchievementsScalarWhereInput[]
  }

  export type SessionUpdateOneWithoutStudentNestedInput = {
    create?: XOR<SessionCreateWithoutStudentInput, SessionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SessionCreateOrConnectWithoutStudentInput
    upsert?: SessionUpsertWithoutStudentInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutStudentInput, SessionUpdateWithoutStudentInput>, SessionUncheckedUpdateWithoutStudentInput>
  }

  export type DiscussionsUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DiscussionsCreateWithoutStudentInput, DiscussionsUncheckedCreateWithoutStudentInput> | DiscussionsCreateWithoutStudentInput[] | DiscussionsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutStudentInput | DiscussionsCreateOrConnectWithoutStudentInput[]
    upsert?: DiscussionsUpsertWithWhereUniqueWithoutStudentInput | DiscussionsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DiscussionsCreateManyStudentInputEnvelope
    set?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    disconnect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    delete?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    update?: DiscussionsUpdateWithWhereUniqueWithoutStudentInput | DiscussionsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DiscussionsUpdateManyWithWhereWithoutStudentInput | DiscussionsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DiscussionsScalarWhereInput | DiscussionsScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type StudentAchievementsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentAchievementsCreateWithoutStudentInput, StudentAchievementsUncheckedCreateWithoutStudentInput> | StudentAchievementsCreateWithoutStudentInput[] | StudentAchievementsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentAchievementsCreateOrConnectWithoutStudentInput | StudentAchievementsCreateOrConnectWithoutStudentInput[]
    upsert?: StudentAchievementsUpsertWithWhereUniqueWithoutStudentInput | StudentAchievementsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentAchievementsCreateManyStudentInputEnvelope
    set?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    disconnect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    delete?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    connect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    update?: StudentAchievementsUpdateWithWhereUniqueWithoutStudentInput | StudentAchievementsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentAchievementsUpdateManyWithWhereWithoutStudentInput | StudentAchievementsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentAchievementsScalarWhereInput | StudentAchievementsScalarWhereInput[]
  }

  export type SessionUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<SessionCreateWithoutStudentInput, SessionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SessionCreateOrConnectWithoutStudentInput
    upsert?: SessionUpsertWithoutStudentInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutStudentInput, SessionUpdateWithoutStudentInput>, SessionUncheckedUpdateWithoutStudentInput>
  }

  export type DiscussionsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<DiscussionsCreateWithoutStudentInput, DiscussionsUncheckedCreateWithoutStudentInput> | DiscussionsCreateWithoutStudentInput[] | DiscussionsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutStudentInput | DiscussionsCreateOrConnectWithoutStudentInput[]
    upsert?: DiscussionsUpsertWithWhereUniqueWithoutStudentInput | DiscussionsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: DiscussionsCreateManyStudentInputEnvelope
    set?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    disconnect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    delete?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    update?: DiscussionsUpdateWithWhereUniqueWithoutStudentInput | DiscussionsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: DiscussionsUpdateManyWithWhereWithoutStudentInput | DiscussionsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: DiscussionsScalarWhereInput | DiscussionsScalarWhereInput[]
  }

  export type QuestionsCreateNestedManyWithoutTopicsInput = {
    create?: XOR<QuestionsCreateWithoutTopicsInput, QuestionsUncheckedCreateWithoutTopicsInput> | QuestionsCreateWithoutTopicsInput[] | QuestionsUncheckedCreateWithoutTopicsInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTopicsInput | QuestionsCreateOrConnectWithoutTopicsInput[]
    createMany?: QuestionsCreateManyTopicsInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type QuestionsUncheckedCreateNestedManyWithoutTopicsInput = {
    create?: XOR<QuestionsCreateWithoutTopicsInput, QuestionsUncheckedCreateWithoutTopicsInput> | QuestionsCreateWithoutTopicsInput[] | QuestionsUncheckedCreateWithoutTopicsInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTopicsInput | QuestionsCreateOrConnectWithoutTopicsInput[]
    createMany?: QuestionsCreateManyTopicsInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type QuestionsUpdateManyWithoutTopicsNestedInput = {
    create?: XOR<QuestionsCreateWithoutTopicsInput, QuestionsUncheckedCreateWithoutTopicsInput> | QuestionsCreateWithoutTopicsInput[] | QuestionsUncheckedCreateWithoutTopicsInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTopicsInput | QuestionsCreateOrConnectWithoutTopicsInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutTopicsInput | QuestionsUpsertWithWhereUniqueWithoutTopicsInput[]
    createMany?: QuestionsCreateManyTopicsInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutTopicsInput | QuestionsUpdateWithWhereUniqueWithoutTopicsInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutTopicsInput | QuestionsUpdateManyWithWhereWithoutTopicsInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type QuestionsUncheckedUpdateManyWithoutTopicsNestedInput = {
    create?: XOR<QuestionsCreateWithoutTopicsInput, QuestionsUncheckedCreateWithoutTopicsInput> | QuestionsCreateWithoutTopicsInput[] | QuestionsUncheckedCreateWithoutTopicsInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutTopicsInput | QuestionsCreateOrConnectWithoutTopicsInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutTopicsInput | QuestionsUpsertWithWhereUniqueWithoutTopicsInput[]
    createMany?: QuestionsCreateManyTopicsInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutTopicsInput | QuestionsUpdateWithWhereUniqueWithoutTopicsInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutTopicsInput | QuestionsUpdateManyWithWhereWithoutTopicsInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type TestCaseCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<TestCaseCreateWithoutQuestionsInput, TestCaseUncheckedCreateWithoutQuestionsInput> | TestCaseCreateWithoutQuestionsInput[] | TestCaseUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutQuestionsInput | TestCaseCreateOrConnectWithoutQuestionsInput[]
    createMany?: TestCaseCreateManyQuestionsInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<SubmissionCreateWithoutQuestionsInput, SubmissionUncheckedCreateWithoutQuestionsInput> | SubmissionCreateWithoutQuestionsInput[] | SubmissionUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuestionsInput | SubmissionCreateOrConnectWithoutQuestionsInput[]
    createMany?: SubmissionCreateManyQuestionsInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type DiscussionsCreateNestedManyWithoutQuestionInput = {
    create?: XOR<DiscussionsCreateWithoutQuestionInput, DiscussionsUncheckedCreateWithoutQuestionInput> | DiscussionsCreateWithoutQuestionInput[] | DiscussionsUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutQuestionInput | DiscussionsCreateOrConnectWithoutQuestionInput[]
    createMany?: DiscussionsCreateManyQuestionInputEnvelope
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
  }

  export type TopicsCreateNestedOneWithoutQuestionInput = {
    create?: XOR<TopicsCreateWithoutQuestionInput, TopicsUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: TopicsCreateOrConnectWithoutQuestionInput
    connect?: TopicsWhereUniqueInput
  }

  export type ContestCreateNestedOneWithoutQuestionInput = {
    create?: XOR<ContestCreateWithoutQuestionInput, ContestUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: ContestCreateOrConnectWithoutQuestionInput
    connect?: ContestWhereUniqueInput
  }

  export type TestCaseUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<TestCaseCreateWithoutQuestionsInput, TestCaseUncheckedCreateWithoutQuestionsInput> | TestCaseCreateWithoutQuestionsInput[] | TestCaseUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutQuestionsInput | TestCaseCreateOrConnectWithoutQuestionsInput[]
    createMany?: TestCaseCreateManyQuestionsInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<SubmissionCreateWithoutQuestionsInput, SubmissionUncheckedCreateWithoutQuestionsInput> | SubmissionCreateWithoutQuestionsInput[] | SubmissionUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuestionsInput | SubmissionCreateOrConnectWithoutQuestionsInput[]
    createMany?: SubmissionCreateManyQuestionsInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type DiscussionsUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<DiscussionsCreateWithoutQuestionInput, DiscussionsUncheckedCreateWithoutQuestionInput> | DiscussionsCreateWithoutQuestionInput[] | DiscussionsUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutQuestionInput | DiscussionsCreateOrConnectWithoutQuestionInput[]
    createMany?: DiscussionsCreateManyQuestionInputEnvelope
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type TestCaseUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<TestCaseCreateWithoutQuestionsInput, TestCaseUncheckedCreateWithoutQuestionsInput> | TestCaseCreateWithoutQuestionsInput[] | TestCaseUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutQuestionsInput | TestCaseCreateOrConnectWithoutQuestionsInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutQuestionsInput | TestCaseUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: TestCaseCreateManyQuestionsInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutQuestionsInput | TestCaseUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutQuestionsInput | TestCaseUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<SubmissionCreateWithoutQuestionsInput, SubmissionUncheckedCreateWithoutQuestionsInput> | SubmissionCreateWithoutQuestionsInput[] | SubmissionUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuestionsInput | SubmissionCreateOrConnectWithoutQuestionsInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutQuestionsInput | SubmissionUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: SubmissionCreateManyQuestionsInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutQuestionsInput | SubmissionUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutQuestionsInput | SubmissionUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type DiscussionsUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<DiscussionsCreateWithoutQuestionInput, DiscussionsUncheckedCreateWithoutQuestionInput> | DiscussionsCreateWithoutQuestionInput[] | DiscussionsUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutQuestionInput | DiscussionsCreateOrConnectWithoutQuestionInput[]
    upsert?: DiscussionsUpsertWithWhereUniqueWithoutQuestionInput | DiscussionsUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: DiscussionsCreateManyQuestionInputEnvelope
    set?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    disconnect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    delete?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    update?: DiscussionsUpdateWithWhereUniqueWithoutQuestionInput | DiscussionsUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: DiscussionsUpdateManyWithWhereWithoutQuestionInput | DiscussionsUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: DiscussionsScalarWhereInput | DiscussionsScalarWhereInput[]
  }

  export type TopicsUpdateOneWithoutQuestionNestedInput = {
    create?: XOR<TopicsCreateWithoutQuestionInput, TopicsUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: TopicsCreateOrConnectWithoutQuestionInput
    upsert?: TopicsUpsertWithoutQuestionInput
    disconnect?: boolean
    delete?: TopicsWhereInput | boolean
    connect?: TopicsWhereUniqueInput
    update?: XOR<XOR<TopicsUpdateToOneWithWhereWithoutQuestionInput, TopicsUpdateWithoutQuestionInput>, TopicsUncheckedUpdateWithoutQuestionInput>
  }

  export type ContestUpdateOneWithoutQuestionNestedInput = {
    create?: XOR<ContestCreateWithoutQuestionInput, ContestUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: ContestCreateOrConnectWithoutQuestionInput
    upsert?: ContestUpsertWithoutQuestionInput
    disconnect?: boolean
    delete?: ContestWhereInput | boolean
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutQuestionInput, ContestUpdateWithoutQuestionInput>, ContestUncheckedUpdateWithoutQuestionInput>
  }

  export type TestCaseUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<TestCaseCreateWithoutQuestionsInput, TestCaseUncheckedCreateWithoutQuestionsInput> | TestCaseCreateWithoutQuestionsInput[] | TestCaseUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutQuestionsInput | TestCaseCreateOrConnectWithoutQuestionsInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutQuestionsInput | TestCaseUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: TestCaseCreateManyQuestionsInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutQuestionsInput | TestCaseUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutQuestionsInput | TestCaseUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<SubmissionCreateWithoutQuestionsInput, SubmissionUncheckedCreateWithoutQuestionsInput> | SubmissionCreateWithoutQuestionsInput[] | SubmissionUncheckedCreateWithoutQuestionsInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutQuestionsInput | SubmissionCreateOrConnectWithoutQuestionsInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutQuestionsInput | SubmissionUpsertWithWhereUniqueWithoutQuestionsInput[]
    createMany?: SubmissionCreateManyQuestionsInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutQuestionsInput | SubmissionUpdateWithWhereUniqueWithoutQuestionsInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutQuestionsInput | SubmissionUpdateManyWithWhereWithoutQuestionsInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type DiscussionsUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<DiscussionsCreateWithoutQuestionInput, DiscussionsUncheckedCreateWithoutQuestionInput> | DiscussionsCreateWithoutQuestionInput[] | DiscussionsUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutQuestionInput | DiscussionsCreateOrConnectWithoutQuestionInput[]
    upsert?: DiscussionsUpsertWithWhereUniqueWithoutQuestionInput | DiscussionsUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: DiscussionsCreateManyQuestionInputEnvelope
    set?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    disconnect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    delete?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    update?: DiscussionsUpdateWithWhereUniqueWithoutQuestionInput | DiscussionsUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: DiscussionsUpdateManyWithWhereWithoutQuestionInput | DiscussionsUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: DiscussionsScalarWhereInput | DiscussionsScalarWhereInput[]
  }

  export type QuestionsCreateNestedOneWithoutTestCaseInput = {
    create?: XOR<QuestionsCreateWithoutTestCaseInput, QuestionsUncheckedCreateWithoutTestCaseInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutTestCaseInput
    connect?: QuestionsWhereUniqueInput
  }

  export type QuestionsUpdateOneRequiredWithoutTestCaseNestedInput = {
    create?: XOR<QuestionsCreateWithoutTestCaseInput, QuestionsUncheckedCreateWithoutTestCaseInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutTestCaseInput
    upsert?: QuestionsUpsertWithoutTestCaseInput
    connect?: QuestionsWhereUniqueInput
    update?: XOR<XOR<QuestionsUpdateToOneWithWhereWithoutTestCaseInput, QuestionsUpdateWithoutTestCaseInput>, QuestionsUncheckedUpdateWithoutTestCaseInput>
  }

  export type QuestionsCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<QuestionsCreateWithoutSubmissionInput, QuestionsUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutSubmissionInput
    connect?: QuestionsWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<StudentCreateWithoutSubmissionInput, StudentUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionInput
    connect?: StudentWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionsUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<QuestionsCreateWithoutSubmissionInput, QuestionsUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutSubmissionInput
    upsert?: QuestionsUpsertWithoutSubmissionInput
    connect?: QuestionsWhereUniqueInput
    update?: XOR<XOR<QuestionsUpdateToOneWithWhereWithoutSubmissionInput, QuestionsUpdateWithoutSubmissionInput>, QuestionsUncheckedUpdateWithoutSubmissionInput>
  }

  export type StudentUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<StudentCreateWithoutSubmissionInput, StudentUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmissionInput
    upsert?: StudentUpsertWithoutSubmissionInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubmissionInput, StudentUpdateWithoutSubmissionInput>, StudentUncheckedUpdateWithoutSubmissionInput>
  }

  export type StudentAchievementsCreateNestedManyWithoutAchievementsInput = {
    create?: XOR<StudentAchievementsCreateWithoutAchievementsInput, StudentAchievementsUncheckedCreateWithoutAchievementsInput> | StudentAchievementsCreateWithoutAchievementsInput[] | StudentAchievementsUncheckedCreateWithoutAchievementsInput[]
    connectOrCreate?: StudentAchievementsCreateOrConnectWithoutAchievementsInput | StudentAchievementsCreateOrConnectWithoutAchievementsInput[]
    createMany?: StudentAchievementsCreateManyAchievementsInputEnvelope
    connect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
  }

  export type StudentAchievementsUncheckedCreateNestedManyWithoutAchievementsInput = {
    create?: XOR<StudentAchievementsCreateWithoutAchievementsInput, StudentAchievementsUncheckedCreateWithoutAchievementsInput> | StudentAchievementsCreateWithoutAchievementsInput[] | StudentAchievementsUncheckedCreateWithoutAchievementsInput[]
    connectOrCreate?: StudentAchievementsCreateOrConnectWithoutAchievementsInput | StudentAchievementsCreateOrConnectWithoutAchievementsInput[]
    createMany?: StudentAchievementsCreateManyAchievementsInputEnvelope
    connect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
  }

  export type StudentAchievementsUpdateManyWithoutAchievementsNestedInput = {
    create?: XOR<StudentAchievementsCreateWithoutAchievementsInput, StudentAchievementsUncheckedCreateWithoutAchievementsInput> | StudentAchievementsCreateWithoutAchievementsInput[] | StudentAchievementsUncheckedCreateWithoutAchievementsInput[]
    connectOrCreate?: StudentAchievementsCreateOrConnectWithoutAchievementsInput | StudentAchievementsCreateOrConnectWithoutAchievementsInput[]
    upsert?: StudentAchievementsUpsertWithWhereUniqueWithoutAchievementsInput | StudentAchievementsUpsertWithWhereUniqueWithoutAchievementsInput[]
    createMany?: StudentAchievementsCreateManyAchievementsInputEnvelope
    set?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    disconnect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    delete?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    connect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    update?: StudentAchievementsUpdateWithWhereUniqueWithoutAchievementsInput | StudentAchievementsUpdateWithWhereUniqueWithoutAchievementsInput[]
    updateMany?: StudentAchievementsUpdateManyWithWhereWithoutAchievementsInput | StudentAchievementsUpdateManyWithWhereWithoutAchievementsInput[]
    deleteMany?: StudentAchievementsScalarWhereInput | StudentAchievementsScalarWhereInput[]
  }

  export type StudentAchievementsUncheckedUpdateManyWithoutAchievementsNestedInput = {
    create?: XOR<StudentAchievementsCreateWithoutAchievementsInput, StudentAchievementsUncheckedCreateWithoutAchievementsInput> | StudentAchievementsCreateWithoutAchievementsInput[] | StudentAchievementsUncheckedCreateWithoutAchievementsInput[]
    connectOrCreate?: StudentAchievementsCreateOrConnectWithoutAchievementsInput | StudentAchievementsCreateOrConnectWithoutAchievementsInput[]
    upsert?: StudentAchievementsUpsertWithWhereUniqueWithoutAchievementsInput | StudentAchievementsUpsertWithWhereUniqueWithoutAchievementsInput[]
    createMany?: StudentAchievementsCreateManyAchievementsInputEnvelope
    set?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    disconnect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    delete?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    connect?: StudentAchievementsWhereUniqueInput | StudentAchievementsWhereUniqueInput[]
    update?: StudentAchievementsUpdateWithWhereUniqueWithoutAchievementsInput | StudentAchievementsUpdateWithWhereUniqueWithoutAchievementsInput[]
    updateMany?: StudentAchievementsUpdateManyWithWhereWithoutAchievementsInput | StudentAchievementsUpdateManyWithWhereWithoutAchievementsInput[]
    deleteMany?: StudentAchievementsScalarWhereInput | StudentAchievementsScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutStudentAchievementsInput = {
    create?: XOR<StudentCreateWithoutStudentAchievementsInput, StudentUncheckedCreateWithoutStudentAchievementsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentAchievementsInput
    connect?: StudentWhereUniqueInput
  }

  export type AchievementsCreateNestedOneWithoutStudentAchievementsInput = {
    create?: XOR<AchievementsCreateWithoutStudentAchievementsInput, AchievementsUncheckedCreateWithoutStudentAchievementsInput>
    connectOrCreate?: AchievementsCreateOrConnectWithoutStudentAchievementsInput
    connect?: AchievementsWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutStudentAchievementsNestedInput = {
    create?: XOR<StudentCreateWithoutStudentAchievementsInput, StudentUncheckedCreateWithoutStudentAchievementsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentAchievementsInput
    upsert?: StudentUpsertWithoutStudentAchievementsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentAchievementsInput, StudentUpdateWithoutStudentAchievementsInput>, StudentUncheckedUpdateWithoutStudentAchievementsInput>
  }

  export type AchievementsUpdateOneRequiredWithoutStudentAchievementsNestedInput = {
    create?: XOR<AchievementsCreateWithoutStudentAchievementsInput, AchievementsUncheckedCreateWithoutStudentAchievementsInput>
    connectOrCreate?: AchievementsCreateOrConnectWithoutStudentAchievementsInput
    upsert?: AchievementsUpsertWithoutStudentAchievementsInput
    connect?: AchievementsWhereUniqueInput
    update?: XOR<XOR<AchievementsUpdateToOneWithWhereWithoutStudentAchievementsInput, AchievementsUpdateWithoutStudentAchievementsInput>, AchievementsUncheckedUpdateWithoutStudentAchievementsInput>
  }

  export type StudentCreateNestedOneWithoutSessionInput = {
    create?: XOR<StudentCreateWithoutSessionInput, StudentUncheckedCreateWithoutSessionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSessionInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<StudentCreateWithoutSessionInput, StudentUncheckedCreateWithoutSessionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSessionInput
    upsert?: StudentUpsertWithoutSessionInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSessionInput, StudentUpdateWithoutSessionInput>, StudentUncheckedUpdateWithoutSessionInput>
  }

  export type StudentCreateNestedOneWithoutDiscussionInput = {
    create?: XOR<StudentCreateWithoutDiscussionInput, StudentUncheckedCreateWithoutDiscussionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDiscussionInput
    connect?: StudentWhereUniqueInput
  }

  export type QuestionsCreateNestedOneWithoutDiscussionInput = {
    create?: XOR<QuestionsCreateWithoutDiscussionInput, QuestionsUncheckedCreateWithoutDiscussionInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutDiscussionInput
    connect?: QuestionsWhereUniqueInput
  }

  export type DiscussionsCreateNestedOneWithoutRepliesIGetInput = {
    create?: XOR<DiscussionsCreateWithoutRepliesIGetInput, DiscussionsUncheckedCreateWithoutRepliesIGetInput>
    connectOrCreate?: DiscussionsCreateOrConnectWithoutRepliesIGetInput
    connect?: DiscussionsWhereUniqueInput
  }

  export type DiscussionsCreateNestedManyWithoutToWhomIReplyInput = {
    create?: XOR<DiscussionsCreateWithoutToWhomIReplyInput, DiscussionsUncheckedCreateWithoutToWhomIReplyInput> | DiscussionsCreateWithoutToWhomIReplyInput[] | DiscussionsUncheckedCreateWithoutToWhomIReplyInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutToWhomIReplyInput | DiscussionsCreateOrConnectWithoutToWhomIReplyInput[]
    createMany?: DiscussionsCreateManyToWhomIReplyInputEnvelope
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
  }

  export type DiscussionsUncheckedCreateNestedManyWithoutToWhomIReplyInput = {
    create?: XOR<DiscussionsCreateWithoutToWhomIReplyInput, DiscussionsUncheckedCreateWithoutToWhomIReplyInput> | DiscussionsCreateWithoutToWhomIReplyInput[] | DiscussionsUncheckedCreateWithoutToWhomIReplyInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutToWhomIReplyInput | DiscussionsCreateOrConnectWithoutToWhomIReplyInput[]
    createMany?: DiscussionsCreateManyToWhomIReplyInputEnvelope
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutDiscussionNestedInput = {
    create?: XOR<StudentCreateWithoutDiscussionInput, StudentUncheckedCreateWithoutDiscussionInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDiscussionInput
    upsert?: StudentUpsertWithoutDiscussionInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutDiscussionInput, StudentUpdateWithoutDiscussionInput>, StudentUncheckedUpdateWithoutDiscussionInput>
  }

  export type QuestionsUpdateOneWithoutDiscussionNestedInput = {
    create?: XOR<QuestionsCreateWithoutDiscussionInput, QuestionsUncheckedCreateWithoutDiscussionInput>
    connectOrCreate?: QuestionsCreateOrConnectWithoutDiscussionInput
    upsert?: QuestionsUpsertWithoutDiscussionInput
    disconnect?: boolean
    delete?: QuestionsWhereInput | boolean
    connect?: QuestionsWhereUniqueInput
    update?: XOR<XOR<QuestionsUpdateToOneWithWhereWithoutDiscussionInput, QuestionsUpdateWithoutDiscussionInput>, QuestionsUncheckedUpdateWithoutDiscussionInput>
  }

  export type DiscussionsUpdateOneWithoutRepliesIGetNestedInput = {
    create?: XOR<DiscussionsCreateWithoutRepliesIGetInput, DiscussionsUncheckedCreateWithoutRepliesIGetInput>
    connectOrCreate?: DiscussionsCreateOrConnectWithoutRepliesIGetInput
    upsert?: DiscussionsUpsertWithoutRepliesIGetInput
    disconnect?: boolean
    delete?: DiscussionsWhereInput | boolean
    connect?: DiscussionsWhereUniqueInput
    update?: XOR<XOR<DiscussionsUpdateToOneWithWhereWithoutRepliesIGetInput, DiscussionsUpdateWithoutRepliesIGetInput>, DiscussionsUncheckedUpdateWithoutRepliesIGetInput>
  }

  export type DiscussionsUpdateManyWithoutToWhomIReplyNestedInput = {
    create?: XOR<DiscussionsCreateWithoutToWhomIReplyInput, DiscussionsUncheckedCreateWithoutToWhomIReplyInput> | DiscussionsCreateWithoutToWhomIReplyInput[] | DiscussionsUncheckedCreateWithoutToWhomIReplyInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutToWhomIReplyInput | DiscussionsCreateOrConnectWithoutToWhomIReplyInput[]
    upsert?: DiscussionsUpsertWithWhereUniqueWithoutToWhomIReplyInput | DiscussionsUpsertWithWhereUniqueWithoutToWhomIReplyInput[]
    createMany?: DiscussionsCreateManyToWhomIReplyInputEnvelope
    set?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    disconnect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    delete?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    update?: DiscussionsUpdateWithWhereUniqueWithoutToWhomIReplyInput | DiscussionsUpdateWithWhereUniqueWithoutToWhomIReplyInput[]
    updateMany?: DiscussionsUpdateManyWithWhereWithoutToWhomIReplyInput | DiscussionsUpdateManyWithWhereWithoutToWhomIReplyInput[]
    deleteMany?: DiscussionsScalarWhereInput | DiscussionsScalarWhereInput[]
  }

  export type DiscussionsUncheckedUpdateManyWithoutToWhomIReplyNestedInput = {
    create?: XOR<DiscussionsCreateWithoutToWhomIReplyInput, DiscussionsUncheckedCreateWithoutToWhomIReplyInput> | DiscussionsCreateWithoutToWhomIReplyInput[] | DiscussionsUncheckedCreateWithoutToWhomIReplyInput[]
    connectOrCreate?: DiscussionsCreateOrConnectWithoutToWhomIReplyInput | DiscussionsCreateOrConnectWithoutToWhomIReplyInput[]
    upsert?: DiscussionsUpsertWithWhereUniqueWithoutToWhomIReplyInput | DiscussionsUpsertWithWhereUniqueWithoutToWhomIReplyInput[]
    createMany?: DiscussionsCreateManyToWhomIReplyInputEnvelope
    set?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    disconnect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    delete?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    connect?: DiscussionsWhereUniqueInput | DiscussionsWhereUniqueInput[]
    update?: DiscussionsUpdateWithWhereUniqueWithoutToWhomIReplyInput | DiscussionsUpdateWithWhereUniqueWithoutToWhomIReplyInput[]
    updateMany?: DiscussionsUpdateManyWithWhereWithoutToWhomIReplyInput | DiscussionsUpdateManyWithWhereWithoutToWhomIReplyInput[]
    deleteMany?: DiscussionsScalarWhereInput | DiscussionsScalarWhereInput[]
  }

  export type QuestionsCreateNestedManyWithoutContestInput = {
    create?: XOR<QuestionsCreateWithoutContestInput, QuestionsUncheckedCreateWithoutContestInput> | QuestionsCreateWithoutContestInput[] | QuestionsUncheckedCreateWithoutContestInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutContestInput | QuestionsCreateOrConnectWithoutContestInput[]
    createMany?: QuestionsCreateManyContestInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type QuestionsUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<QuestionsCreateWithoutContestInput, QuestionsUncheckedCreateWithoutContestInput> | QuestionsCreateWithoutContestInput[] | QuestionsUncheckedCreateWithoutContestInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutContestInput | QuestionsCreateOrConnectWithoutContestInput[]
    createMany?: QuestionsCreateManyContestInputEnvelope
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
  }

  export type QuestionsUpdateManyWithoutContestNestedInput = {
    create?: XOR<QuestionsCreateWithoutContestInput, QuestionsUncheckedCreateWithoutContestInput> | QuestionsCreateWithoutContestInput[] | QuestionsUncheckedCreateWithoutContestInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutContestInput | QuestionsCreateOrConnectWithoutContestInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutContestInput | QuestionsUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: QuestionsCreateManyContestInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutContestInput | QuestionsUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutContestInput | QuestionsUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
  }

  export type QuestionsUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<QuestionsCreateWithoutContestInput, QuestionsUncheckedCreateWithoutContestInput> | QuestionsCreateWithoutContestInput[] | QuestionsUncheckedCreateWithoutContestInput[]
    connectOrCreate?: QuestionsCreateOrConnectWithoutContestInput | QuestionsCreateOrConnectWithoutContestInput[]
    upsert?: QuestionsUpsertWithWhereUniqueWithoutContestInput | QuestionsUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: QuestionsCreateManyContestInputEnvelope
    set?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    disconnect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    delete?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    connect?: QuestionsWhereUniqueInput | QuestionsWhereUniqueInput[]
    update?: QuestionsUpdateWithWhereUniqueWithoutContestInput | QuestionsUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: QuestionsUpdateManyWithWhereWithoutContestInput | QuestionsUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type SubmissionCreateWithoutStudentInput = {
    id?: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
    questions: QuestionsCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    questionId: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
  }

  export type SubmissionCreateOrConnectWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionCreateManyStudentInputEnvelope = {
    data: SubmissionCreateManyStudentInput | SubmissionCreateManyStudentInput[]
  }

  export type StudentAchievementsCreateWithoutStudentInput = {
    id?: string
    count: number
    achievements: AchievementsCreateNestedOneWithoutStudentAchievementsInput
  }

  export type StudentAchievementsUncheckedCreateWithoutStudentInput = {
    id?: string
    achievementId: string
    count: number
  }

  export type StudentAchievementsCreateOrConnectWithoutStudentInput = {
    where: StudentAchievementsWhereUniqueInput
    create: XOR<StudentAchievementsCreateWithoutStudentInput, StudentAchievementsUncheckedCreateWithoutStudentInput>
  }

  export type StudentAchievementsCreateManyStudentInputEnvelope = {
    data: StudentAchievementsCreateManyStudentInput | StudentAchievementsCreateManyStudentInput[]
  }

  export type SessionCreateWithoutStudentInput = {
    id?: string
    session: string
    expiry: Date | string
  }

  export type SessionUncheckedCreateWithoutStudentInput = {
    id?: string
    session: string
    expiry: Date | string
  }

  export type SessionCreateOrConnectWithoutStudentInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutStudentInput, SessionUncheckedCreateWithoutStudentInput>
  }

  export type DiscussionsCreateWithoutStudentInput = {
    id?: string
    type?: string
    timeOfComment: Date | string
    question?: QuestionsCreateNestedOneWithoutDiscussionInput
    toWhomIReply?: DiscussionsCreateNestedOneWithoutRepliesIGetInput
    repliesIGet?: DiscussionsCreateNestedManyWithoutToWhomIReplyInput
  }

  export type DiscussionsUncheckedCreateWithoutStudentInput = {
    id?: string
    type?: string
    questionId?: string | null
    repliedTo?: string | null
    timeOfComment: Date | string
    repliesIGet?: DiscussionsUncheckedCreateNestedManyWithoutToWhomIReplyInput
  }

  export type DiscussionsCreateOrConnectWithoutStudentInput = {
    where: DiscussionsWhereUniqueInput
    create: XOR<DiscussionsCreateWithoutStudentInput, DiscussionsUncheckedCreateWithoutStudentInput>
  }

  export type DiscussionsCreateManyStudentInputEnvelope = {
    data: DiscussionsCreateManyStudentInput | DiscussionsCreateManyStudentInput[]
  }

  export type SubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    questionId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    startTime?: DateTimeFilter<"Submission"> | Date | string
    maxTimeToSolve?: DateTimeFilter<"Submission"> | Date | string
    submittedOn?: DateTimeNullableFilter<"Submission"> | Date | string | null
    status?: StringFilter<"Submission"> | string
    noOfCasesPassed?: IntFilter<"Submission"> | number
    pointsSecured?: IntFilter<"Submission"> | number
    type?: StringFilter<"Submission"> | string
    output1?: StringNullableFilter<"Submission"> | string | null
    output2?: StringNullableFilter<"Submission"> | string | null
    isFinal?: StringFilter<"Submission"> | string
    code?: StringNullableFilter<"Submission"> | string | null
    leetCodeLink?: StringNullableFilter<"Submission"> | string | null
    language?: StringNullableFilter<"Submission"> | string | null
    savedCCode?: StringFilter<"Submission"> | string
    savedCppCode?: StringFilter<"Submission"> | string
    savedJavaCode?: StringFilter<"Submission"> | string
    savedPythonCode?: StringFilter<"Submission"> | string
    failedForInput?: StringNullableFilter<"Submission"> | string | null
    isChecked?: StringFilter<"Submission"> | string
    output1Status?: StringFilter<"Submission"> | string
    output2Status?: StringFilter<"Submission"> | string
  }

  export type StudentAchievementsUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentAchievementsWhereUniqueInput
    update: XOR<StudentAchievementsUpdateWithoutStudentInput, StudentAchievementsUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentAchievementsCreateWithoutStudentInput, StudentAchievementsUncheckedCreateWithoutStudentInput>
  }

  export type StudentAchievementsUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentAchievementsWhereUniqueInput
    data: XOR<StudentAchievementsUpdateWithoutStudentInput, StudentAchievementsUncheckedUpdateWithoutStudentInput>
  }

  export type StudentAchievementsUpdateManyWithWhereWithoutStudentInput = {
    where: StudentAchievementsScalarWhereInput
    data: XOR<StudentAchievementsUpdateManyMutationInput, StudentAchievementsUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentAchievementsScalarWhereInput = {
    AND?: StudentAchievementsScalarWhereInput | StudentAchievementsScalarWhereInput[]
    OR?: StudentAchievementsScalarWhereInput[]
    NOT?: StudentAchievementsScalarWhereInput | StudentAchievementsScalarWhereInput[]
    id?: StringFilter<"StudentAchievements"> | string
    studentId?: StringFilter<"StudentAchievements"> | string
    achievementId?: StringFilter<"StudentAchievements"> | string
    count?: IntFilter<"StudentAchievements"> | number
  }

  export type SessionUpsertWithoutStudentInput = {
    update: XOR<SessionUpdateWithoutStudentInput, SessionUncheckedUpdateWithoutStudentInput>
    create: XOR<SessionCreateWithoutStudentInput, SessionUncheckedCreateWithoutStudentInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutStudentInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutStudentInput, SessionUncheckedUpdateWithoutStudentInput>
  }

  export type SessionUpdateWithoutStudentInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutStudentInput = {
    session?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionsUpsertWithWhereUniqueWithoutStudentInput = {
    where: DiscussionsWhereUniqueInput
    update: XOR<DiscussionsUpdateWithoutStudentInput, DiscussionsUncheckedUpdateWithoutStudentInput>
    create: XOR<DiscussionsCreateWithoutStudentInput, DiscussionsUncheckedCreateWithoutStudentInput>
  }

  export type DiscussionsUpdateWithWhereUniqueWithoutStudentInput = {
    where: DiscussionsWhereUniqueInput
    data: XOR<DiscussionsUpdateWithoutStudentInput, DiscussionsUncheckedUpdateWithoutStudentInput>
  }

  export type DiscussionsUpdateManyWithWhereWithoutStudentInput = {
    where: DiscussionsScalarWhereInput
    data: XOR<DiscussionsUpdateManyMutationInput, DiscussionsUncheckedUpdateManyWithoutStudentInput>
  }

  export type DiscussionsScalarWhereInput = {
    AND?: DiscussionsScalarWhereInput | DiscussionsScalarWhereInput[]
    OR?: DiscussionsScalarWhereInput[]
    NOT?: DiscussionsScalarWhereInput | DiscussionsScalarWhereInput[]
    id?: StringFilter<"Discussions"> | string
    studentId?: StringFilter<"Discussions"> | string
    type?: StringFilter<"Discussions"> | string
    questionId?: StringNullableFilter<"Discussions"> | string | null
    repliedTo?: StringNullableFilter<"Discussions"> | string | null
    timeOfComment?: DateTimeFilter<"Discussions"> | Date | string
  }

  export type QuestionsCreateWithoutTopicsInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseCreateNestedManyWithoutQuestionsInput
    submission?: SubmissionCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsCreateNestedManyWithoutQuestionInput
    contest?: ContestCreateNestedOneWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateWithoutTopicsInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    contestId?: string | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseUncheckedCreateNestedManyWithoutQuestionsInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsCreateOrConnectWithoutTopicsInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutTopicsInput, QuestionsUncheckedCreateWithoutTopicsInput>
  }

  export type QuestionsCreateManyTopicsInputEnvelope = {
    data: QuestionsCreateManyTopicsInput | QuestionsCreateManyTopicsInput[]
  }

  export type QuestionsUpsertWithWhereUniqueWithoutTopicsInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutTopicsInput, QuestionsUncheckedUpdateWithoutTopicsInput>
    create: XOR<QuestionsCreateWithoutTopicsInput, QuestionsUncheckedCreateWithoutTopicsInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutTopicsInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutTopicsInput, QuestionsUncheckedUpdateWithoutTopicsInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutTopicsInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutTopicsInput>
  }

  export type QuestionsScalarWhereInput = {
    AND?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
    OR?: QuestionsScalarWhereInput[]
    NOT?: QuestionsScalarWhereInput | QuestionsScalarWhereInput[]
    id?: StringFilter<"Questions"> | string
    title?: StringFilter<"Questions"> | string
    description?: StringFilter<"Questions"> | string
    miniDescription?: StringNullableFilter<"Questions"> | string | null
    topicId?: StringNullableFilter<"Questions"> | string | null
    noOfHiddenTestCases?: IntFilter<"Questions"> | number
    noOfExternalTestCases?: IntFilter<"Questions"> | number
    difficulty?: StringFilter<"Questions"> | string
    pointsPerTestCaseSolved?: IntFilter<"Questions"> | number
    type?: StringFilter<"Questions"> | string
    leetCodeLink?: StringNullableFilter<"Questions"> | string | null
    leetCodeTitle?: StringNullableFilter<"Questions"> | string | null
    timeToSolveInMinutes?: IntNullableFilter<"Questions"> | number | null
    contestId?: StringNullableFilter<"Questions"> | string | null
    JavaImports?: StringFilter<"Questions"> | string
    JavaBoilerCode?: StringFilter<"Questions"> | string
    CBoilerCode?: StringFilter<"Questions"> | string
    CppBoilerCode?: StringFilter<"Questions"> | string
    PythonBoilerCode?: StringFilter<"Questions"> | string
  }

  export type TestCaseCreateWithoutQuestionsInput = {
    id?: string
    inputString: string
    outputString: string
    type?: string
  }

  export type TestCaseUncheckedCreateWithoutQuestionsInput = {
    id?: string
    inputString: string
    outputString: string
    type?: string
  }

  export type TestCaseCreateOrConnectWithoutQuestionsInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutQuestionsInput, TestCaseUncheckedCreateWithoutQuestionsInput>
  }

  export type TestCaseCreateManyQuestionsInputEnvelope = {
    data: TestCaseCreateManyQuestionsInput | TestCaseCreateManyQuestionsInput[]
  }

  export type SubmissionCreateWithoutQuestionsInput = {
    id?: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
    student: StudentCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutQuestionsInput = {
    id?: string
    studentId: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
  }

  export type SubmissionCreateOrConnectWithoutQuestionsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutQuestionsInput, SubmissionUncheckedCreateWithoutQuestionsInput>
  }

  export type SubmissionCreateManyQuestionsInputEnvelope = {
    data: SubmissionCreateManyQuestionsInput | SubmissionCreateManyQuestionsInput[]
  }

  export type DiscussionsCreateWithoutQuestionInput = {
    id?: string
    type?: string
    timeOfComment: Date | string
    student: StudentCreateNestedOneWithoutDiscussionInput
    toWhomIReply?: DiscussionsCreateNestedOneWithoutRepliesIGetInput
    repliesIGet?: DiscussionsCreateNestedManyWithoutToWhomIReplyInput
  }

  export type DiscussionsUncheckedCreateWithoutQuestionInput = {
    id?: string
    studentId: string
    type?: string
    repliedTo?: string | null
    timeOfComment: Date | string
    repliesIGet?: DiscussionsUncheckedCreateNestedManyWithoutToWhomIReplyInput
  }

  export type DiscussionsCreateOrConnectWithoutQuestionInput = {
    where: DiscussionsWhereUniqueInput
    create: XOR<DiscussionsCreateWithoutQuestionInput, DiscussionsUncheckedCreateWithoutQuestionInput>
  }

  export type DiscussionsCreateManyQuestionInputEnvelope = {
    data: DiscussionsCreateManyQuestionInput | DiscussionsCreateManyQuestionInput[]
  }

  export type TopicsCreateWithoutQuestionInput = {
    id?: string
    name: string
    description?: string | null
    notes?: string | null
  }

  export type TopicsUncheckedCreateWithoutQuestionInput = {
    id?: string
    name: string
    description?: string | null
    notes?: string | null
  }

  export type TopicsCreateOrConnectWithoutQuestionInput = {
    where: TopicsWhereUniqueInput
    create: XOR<TopicsCreateWithoutQuestionInput, TopicsUncheckedCreateWithoutQuestionInput>
  }

  export type ContestCreateWithoutQuestionInput = {
    id?: string
    miniDescription?: string | null
    title: string
    opensOn: Date | string
    closesOn: Date | string
    timeToSolveInMinutes: number
    totalPoints: number
    totalNoOfQuestions: number
    resultPublished?: number
  }

  export type ContestUncheckedCreateWithoutQuestionInput = {
    id?: string
    miniDescription?: string | null
    title: string
    opensOn: Date | string
    closesOn: Date | string
    timeToSolveInMinutes: number
    totalPoints: number
    totalNoOfQuestions: number
    resultPublished?: number
  }

  export type ContestCreateOrConnectWithoutQuestionInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutQuestionInput, ContestUncheckedCreateWithoutQuestionInput>
  }

  export type TestCaseUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: TestCaseWhereUniqueInput
    update: XOR<TestCaseUpdateWithoutQuestionsInput, TestCaseUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TestCaseCreateWithoutQuestionsInput, TestCaseUncheckedCreateWithoutQuestionsInput>
  }

  export type TestCaseUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: TestCaseWhereUniqueInput
    data: XOR<TestCaseUpdateWithoutQuestionsInput, TestCaseUncheckedUpdateWithoutQuestionsInput>
  }

  export type TestCaseUpdateManyWithWhereWithoutQuestionsInput = {
    where: TestCaseScalarWhereInput
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type TestCaseScalarWhereInput = {
    AND?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    OR?: TestCaseScalarWhereInput[]
    NOT?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    id?: StringFilter<"TestCase"> | string
    inputString?: StringFilter<"TestCase"> | string
    outputString?: StringFilter<"TestCase"> | string
    questionId?: StringFilter<"TestCase"> | string
    type?: StringFilter<"TestCase"> | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutQuestionsInput, SubmissionUncheckedUpdateWithoutQuestionsInput>
    create: XOR<SubmissionCreateWithoutQuestionsInput, SubmissionUncheckedCreateWithoutQuestionsInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutQuestionsInput, SubmissionUncheckedUpdateWithoutQuestionsInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutQuestionsInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type DiscussionsUpsertWithWhereUniqueWithoutQuestionInput = {
    where: DiscussionsWhereUniqueInput
    update: XOR<DiscussionsUpdateWithoutQuestionInput, DiscussionsUncheckedUpdateWithoutQuestionInput>
    create: XOR<DiscussionsCreateWithoutQuestionInput, DiscussionsUncheckedCreateWithoutQuestionInput>
  }

  export type DiscussionsUpdateWithWhereUniqueWithoutQuestionInput = {
    where: DiscussionsWhereUniqueInput
    data: XOR<DiscussionsUpdateWithoutQuestionInput, DiscussionsUncheckedUpdateWithoutQuestionInput>
  }

  export type DiscussionsUpdateManyWithWhereWithoutQuestionInput = {
    where: DiscussionsScalarWhereInput
    data: XOR<DiscussionsUpdateManyMutationInput, DiscussionsUncheckedUpdateManyWithoutQuestionInput>
  }

  export type TopicsUpsertWithoutQuestionInput = {
    update: XOR<TopicsUpdateWithoutQuestionInput, TopicsUncheckedUpdateWithoutQuestionInput>
    create: XOR<TopicsCreateWithoutQuestionInput, TopicsUncheckedCreateWithoutQuestionInput>
    where?: TopicsWhereInput
  }

  export type TopicsUpdateToOneWithWhereWithoutQuestionInput = {
    where?: TopicsWhereInput
    data: XOR<TopicsUpdateWithoutQuestionInput, TopicsUncheckedUpdateWithoutQuestionInput>
  }

  export type TopicsUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicsUncheckedUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContestUpsertWithoutQuestionInput = {
    update: XOR<ContestUpdateWithoutQuestionInput, ContestUncheckedUpdateWithoutQuestionInput>
    create: XOR<ContestCreateWithoutQuestionInput, ContestUncheckedCreateWithoutQuestionInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutQuestionInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutQuestionInput, ContestUncheckedUpdateWithoutQuestionInput>
  }

  export type ContestUpdateWithoutQuestionInput = {
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    opensOn?: DateTimeFieldUpdateOperationsInput | Date | string
    closesOn?: DateTimeFieldUpdateOperationsInput | Date | string
    timeToSolveInMinutes?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    totalNoOfQuestions?: IntFieldUpdateOperationsInput | number
    resultPublished?: IntFieldUpdateOperationsInput | number
  }

  export type ContestUncheckedUpdateWithoutQuestionInput = {
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    opensOn?: DateTimeFieldUpdateOperationsInput | Date | string
    closesOn?: DateTimeFieldUpdateOperationsInput | Date | string
    timeToSolveInMinutes?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    totalNoOfQuestions?: IntFieldUpdateOperationsInput | number
    resultPublished?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionsCreateWithoutTestCaseInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    submission?: SubmissionCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsCreateNestedManyWithoutQuestionInput
    topics?: TopicsCreateNestedOneWithoutQuestionInput
    contest?: ContestCreateNestedOneWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateWithoutTestCaseInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    topicId?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    contestId?: string | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    submission?: SubmissionUncheckedCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsCreateOrConnectWithoutTestCaseInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutTestCaseInput, QuestionsUncheckedCreateWithoutTestCaseInput>
  }

  export type QuestionsUpsertWithoutTestCaseInput = {
    update: XOR<QuestionsUpdateWithoutTestCaseInput, QuestionsUncheckedUpdateWithoutTestCaseInput>
    create: XOR<QuestionsCreateWithoutTestCaseInput, QuestionsUncheckedCreateWithoutTestCaseInput>
    where?: QuestionsWhereInput
  }

  export type QuestionsUpdateToOneWithWhereWithoutTestCaseInput = {
    where?: QuestionsWhereInput
    data: XOR<QuestionsUpdateWithoutTestCaseInput, QuestionsUncheckedUpdateWithoutTestCaseInput>
  }

  export type QuestionsUpdateWithoutTestCaseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    submission?: SubmissionUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUpdateManyWithoutQuestionNestedInput
    topics?: TopicsUpdateOneWithoutQuestionNestedInput
    contest?: ContestUpdateOneWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutTestCaseInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    submission?: SubmissionUncheckedUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsCreateNestedManyWithoutQuestionInput
    topics?: TopicsCreateNestedOneWithoutQuestionInput
    contest?: ContestCreateNestedOneWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    topicId?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    contestId?: string | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseUncheckedCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsCreateOrConnectWithoutSubmissionInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutSubmissionInput, QuestionsUncheckedCreateWithoutSubmissionInput>
  }

  export type StudentCreateWithoutSubmissionInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    studentAchievements?: StudentAchievementsCreateNestedManyWithoutStudentInput
    session?: SessionCreateNestedOneWithoutStudentInput
    discussion?: DiscussionsCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubmissionInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    studentAchievements?: StudentAchievementsUncheckedCreateNestedManyWithoutStudentInput
    session?: SessionUncheckedCreateNestedOneWithoutStudentInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubmissionInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubmissionInput, StudentUncheckedCreateWithoutSubmissionInput>
  }

  export type QuestionsUpsertWithoutSubmissionInput = {
    update: XOR<QuestionsUpdateWithoutSubmissionInput, QuestionsUncheckedUpdateWithoutSubmissionInput>
    create: XOR<QuestionsCreateWithoutSubmissionInput, QuestionsUncheckedCreateWithoutSubmissionInput>
    where?: QuestionsWhereInput
  }

  export type QuestionsUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: QuestionsWhereInput
    data: XOR<QuestionsUpdateWithoutSubmissionInput, QuestionsUncheckedUpdateWithoutSubmissionInput>
  }

  export type QuestionsUpdateWithoutSubmissionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUpdateManyWithoutQuestionNestedInput
    topics?: TopicsUpdateOneWithoutQuestionNestedInput
    contest?: ContestUpdateOneWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutSubmissionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUncheckedUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type StudentUpsertWithoutSubmissionInput = {
    update: XOR<StudentUpdateWithoutSubmissionInput, StudentUncheckedUpdateWithoutSubmissionInput>
    create: XOR<StudentCreateWithoutSubmissionInput, StudentUncheckedCreateWithoutSubmissionInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubmissionInput, StudentUncheckedUpdateWithoutSubmissionInput>
  }

  export type StudentUpdateWithoutSubmissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentAchievements?: StudentAchievementsUpdateManyWithoutStudentNestedInput
    session?: SessionUpdateOneWithoutStudentNestedInput
    discussion?: DiscussionsUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubmissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentAchievements?: StudentAchievementsUncheckedUpdateManyWithoutStudentNestedInput
    session?: SessionUncheckedUpdateOneWithoutStudentNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentAchievementsCreateWithoutAchievementsInput = {
    id?: string
    count: number
    student: StudentCreateNestedOneWithoutStudentAchievementsInput
  }

  export type StudentAchievementsUncheckedCreateWithoutAchievementsInput = {
    id?: string
    studentId: string
    count: number
  }

  export type StudentAchievementsCreateOrConnectWithoutAchievementsInput = {
    where: StudentAchievementsWhereUniqueInput
    create: XOR<StudentAchievementsCreateWithoutAchievementsInput, StudentAchievementsUncheckedCreateWithoutAchievementsInput>
  }

  export type StudentAchievementsCreateManyAchievementsInputEnvelope = {
    data: StudentAchievementsCreateManyAchievementsInput | StudentAchievementsCreateManyAchievementsInput[]
  }

  export type StudentAchievementsUpsertWithWhereUniqueWithoutAchievementsInput = {
    where: StudentAchievementsWhereUniqueInput
    update: XOR<StudentAchievementsUpdateWithoutAchievementsInput, StudentAchievementsUncheckedUpdateWithoutAchievementsInput>
    create: XOR<StudentAchievementsCreateWithoutAchievementsInput, StudentAchievementsUncheckedCreateWithoutAchievementsInput>
  }

  export type StudentAchievementsUpdateWithWhereUniqueWithoutAchievementsInput = {
    where: StudentAchievementsWhereUniqueInput
    data: XOR<StudentAchievementsUpdateWithoutAchievementsInput, StudentAchievementsUncheckedUpdateWithoutAchievementsInput>
  }

  export type StudentAchievementsUpdateManyWithWhereWithoutAchievementsInput = {
    where: StudentAchievementsScalarWhereInput
    data: XOR<StudentAchievementsUpdateManyMutationInput, StudentAchievementsUncheckedUpdateManyWithoutAchievementsInput>
  }

  export type StudentCreateWithoutStudentAchievementsInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    submission?: SubmissionCreateNestedManyWithoutStudentInput
    session?: SessionCreateNestedOneWithoutStudentInput
    discussion?: DiscussionsCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentAchievementsInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    submission?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    session?: SessionUncheckedCreateNestedOneWithoutStudentInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentAchievementsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentAchievementsInput, StudentUncheckedCreateWithoutStudentAchievementsInput>
  }

  export type AchievementsCreateWithoutStudentAchievementsInput = {
    id?: string
    title: string
    description?: string | null
  }

  export type AchievementsUncheckedCreateWithoutStudentAchievementsInput = {
    id?: string
    title: string
    description?: string | null
  }

  export type AchievementsCreateOrConnectWithoutStudentAchievementsInput = {
    where: AchievementsWhereUniqueInput
    create: XOR<AchievementsCreateWithoutStudentAchievementsInput, AchievementsUncheckedCreateWithoutStudentAchievementsInput>
  }

  export type StudentUpsertWithoutStudentAchievementsInput = {
    update: XOR<StudentUpdateWithoutStudentAchievementsInput, StudentUncheckedUpdateWithoutStudentAchievementsInput>
    create: XOR<StudentCreateWithoutStudentAchievementsInput, StudentUncheckedCreateWithoutStudentAchievementsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentAchievementsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentAchievementsInput, StudentUncheckedUpdateWithoutStudentAchievementsInput>
  }

  export type StudentUpdateWithoutStudentAchievementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUpdateManyWithoutStudentNestedInput
    session?: SessionUpdateOneWithoutStudentNestedInput
    discussion?: DiscussionsUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentAchievementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    session?: SessionUncheckedUpdateOneWithoutStudentNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AchievementsUpsertWithoutStudentAchievementsInput = {
    update: XOR<AchievementsUpdateWithoutStudentAchievementsInput, AchievementsUncheckedUpdateWithoutStudentAchievementsInput>
    create: XOR<AchievementsCreateWithoutStudentAchievementsInput, AchievementsUncheckedCreateWithoutStudentAchievementsInput>
    where?: AchievementsWhereInput
  }

  export type AchievementsUpdateToOneWithWhereWithoutStudentAchievementsInput = {
    where?: AchievementsWhereInput
    data: XOR<AchievementsUpdateWithoutStudentAchievementsInput, AchievementsUncheckedUpdateWithoutStudentAchievementsInput>
  }

  export type AchievementsUpdateWithoutStudentAchievementsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementsUncheckedUpdateWithoutStudentAchievementsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateWithoutSessionInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    submission?: SubmissionCreateNestedManyWithoutStudentInput
    studentAchievements?: StudentAchievementsCreateNestedManyWithoutStudentInput
    discussion?: DiscussionsCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSessionInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    submission?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    studentAchievements?: StudentAchievementsUncheckedCreateNestedManyWithoutStudentInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSessionInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSessionInput, StudentUncheckedCreateWithoutSessionInput>
  }

  export type StudentUpsertWithoutSessionInput = {
    update: XOR<StudentUpdateWithoutSessionInput, StudentUncheckedUpdateWithoutSessionInput>
    create: XOR<StudentCreateWithoutSessionInput, StudentUncheckedCreateWithoutSessionInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSessionInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSessionInput, StudentUncheckedUpdateWithoutSessionInput>
  }

  export type StudentUpdateWithoutSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUpdateManyWithoutStudentNestedInput
    studentAchievements?: StudentAchievementsUpdateManyWithoutStudentNestedInput
    discussion?: DiscussionsUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSessionInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    studentAchievements?: StudentAchievementsUncheckedUpdateManyWithoutStudentNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutDiscussionInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    submission?: SubmissionCreateNestedManyWithoutStudentInput
    studentAchievements?: StudentAchievementsCreateNestedManyWithoutStudentInput
    session?: SessionCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutDiscussionInput = {
    id?: string
    name: string
    rno: string
    uname: string
    leetCodeName?: string | null
    salt: string
    hash: string
    timeOfLastSolve?: Date | string | null
    submission?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    studentAchievements?: StudentAchievementsUncheckedCreateNestedManyWithoutStudentInput
    session?: SessionUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutDiscussionInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutDiscussionInput, StudentUncheckedCreateWithoutDiscussionInput>
  }

  export type QuestionsCreateWithoutDiscussionInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseCreateNestedManyWithoutQuestionsInput
    submission?: SubmissionCreateNestedManyWithoutQuestionsInput
    topics?: TopicsCreateNestedOneWithoutQuestionInput
    contest?: ContestCreateNestedOneWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateWithoutDiscussionInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    topicId?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    contestId?: string | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseUncheckedCreateNestedManyWithoutQuestionsInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutQuestionsInput
  }

  export type QuestionsCreateOrConnectWithoutDiscussionInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutDiscussionInput, QuestionsUncheckedCreateWithoutDiscussionInput>
  }

  export type DiscussionsCreateWithoutRepliesIGetInput = {
    id?: string
    type?: string
    timeOfComment: Date | string
    student: StudentCreateNestedOneWithoutDiscussionInput
    question?: QuestionsCreateNestedOneWithoutDiscussionInput
    toWhomIReply?: DiscussionsCreateNestedOneWithoutRepliesIGetInput
  }

  export type DiscussionsUncheckedCreateWithoutRepliesIGetInput = {
    id?: string
    studentId: string
    type?: string
    questionId?: string | null
    repliedTo?: string | null
    timeOfComment: Date | string
  }

  export type DiscussionsCreateOrConnectWithoutRepliesIGetInput = {
    where: DiscussionsWhereUniqueInput
    create: XOR<DiscussionsCreateWithoutRepliesIGetInput, DiscussionsUncheckedCreateWithoutRepliesIGetInput>
  }

  export type DiscussionsCreateWithoutToWhomIReplyInput = {
    id?: string
    type?: string
    timeOfComment: Date | string
    student: StudentCreateNestedOneWithoutDiscussionInput
    question?: QuestionsCreateNestedOneWithoutDiscussionInput
    repliesIGet?: DiscussionsCreateNestedManyWithoutToWhomIReplyInput
  }

  export type DiscussionsUncheckedCreateWithoutToWhomIReplyInput = {
    id?: string
    studentId: string
    type?: string
    questionId?: string | null
    timeOfComment: Date | string
    repliesIGet?: DiscussionsUncheckedCreateNestedManyWithoutToWhomIReplyInput
  }

  export type DiscussionsCreateOrConnectWithoutToWhomIReplyInput = {
    where: DiscussionsWhereUniqueInput
    create: XOR<DiscussionsCreateWithoutToWhomIReplyInput, DiscussionsUncheckedCreateWithoutToWhomIReplyInput>
  }

  export type DiscussionsCreateManyToWhomIReplyInputEnvelope = {
    data: DiscussionsCreateManyToWhomIReplyInput | DiscussionsCreateManyToWhomIReplyInput[]
  }

  export type StudentUpsertWithoutDiscussionInput = {
    update: XOR<StudentUpdateWithoutDiscussionInput, StudentUncheckedUpdateWithoutDiscussionInput>
    create: XOR<StudentCreateWithoutDiscussionInput, StudentUncheckedCreateWithoutDiscussionInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutDiscussionInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutDiscussionInput, StudentUncheckedUpdateWithoutDiscussionInput>
  }

  export type StudentUpdateWithoutDiscussionInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUpdateManyWithoutStudentNestedInput
    studentAchievements?: StudentAchievementsUpdateManyWithoutStudentNestedInput
    session?: SessionUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutDiscussionInput = {
    name?: StringFieldUpdateOperationsInput | string
    rno?: StringFieldUpdateOperationsInput | string
    uname?: StringFieldUpdateOperationsInput | string
    leetCodeName?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    timeOfLastSolve?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submission?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    studentAchievements?: StudentAchievementsUncheckedUpdateManyWithoutStudentNestedInput
    session?: SessionUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type QuestionsUpsertWithoutDiscussionInput = {
    update: XOR<QuestionsUpdateWithoutDiscussionInput, QuestionsUncheckedUpdateWithoutDiscussionInput>
    create: XOR<QuestionsCreateWithoutDiscussionInput, QuestionsUncheckedCreateWithoutDiscussionInput>
    where?: QuestionsWhereInput
  }

  export type QuestionsUpdateToOneWithWhereWithoutDiscussionInput = {
    where?: QuestionsWhereInput
    data: XOR<QuestionsUpdateWithoutDiscussionInput, QuestionsUncheckedUpdateWithoutDiscussionInput>
  }

  export type QuestionsUpdateWithoutDiscussionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUpdateManyWithoutQuestionsNestedInput
    submission?: SubmissionUpdateManyWithoutQuestionsNestedInput
    topics?: TopicsUpdateOneWithoutQuestionNestedInput
    contest?: ContestUpdateOneWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutDiscussionInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUncheckedUpdateManyWithoutQuestionsNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutQuestionsNestedInput
  }

  export type DiscussionsUpsertWithoutRepliesIGetInput = {
    update: XOR<DiscussionsUpdateWithoutRepliesIGetInput, DiscussionsUncheckedUpdateWithoutRepliesIGetInput>
    create: XOR<DiscussionsCreateWithoutRepliesIGetInput, DiscussionsUncheckedCreateWithoutRepliesIGetInput>
    where?: DiscussionsWhereInput
  }

  export type DiscussionsUpdateToOneWithWhereWithoutRepliesIGetInput = {
    where?: DiscussionsWhereInput
    data: XOR<DiscussionsUpdateWithoutRepliesIGetInput, DiscussionsUncheckedUpdateWithoutRepliesIGetInput>
  }

  export type DiscussionsUpdateWithoutRepliesIGetInput = {
    type?: StringFieldUpdateOperationsInput | string
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutDiscussionNestedInput
    question?: QuestionsUpdateOneWithoutDiscussionNestedInput
    toWhomIReply?: DiscussionsUpdateOneWithoutRepliesIGetNestedInput
  }

  export type DiscussionsUncheckedUpdateWithoutRepliesIGetInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    repliedTo?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscussionsUpsertWithWhereUniqueWithoutToWhomIReplyInput = {
    where: DiscussionsWhereUniqueInput
    update: XOR<DiscussionsUpdateWithoutToWhomIReplyInput, DiscussionsUncheckedUpdateWithoutToWhomIReplyInput>
    create: XOR<DiscussionsCreateWithoutToWhomIReplyInput, DiscussionsUncheckedCreateWithoutToWhomIReplyInput>
  }

  export type DiscussionsUpdateWithWhereUniqueWithoutToWhomIReplyInput = {
    where: DiscussionsWhereUniqueInput
    data: XOR<DiscussionsUpdateWithoutToWhomIReplyInput, DiscussionsUncheckedUpdateWithoutToWhomIReplyInput>
  }

  export type DiscussionsUpdateManyWithWhereWithoutToWhomIReplyInput = {
    where: DiscussionsScalarWhereInput
    data: XOR<DiscussionsUpdateManyMutationInput, DiscussionsUncheckedUpdateManyWithoutToWhomIReplyInput>
  }

  export type QuestionsCreateWithoutContestInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseCreateNestedManyWithoutQuestionsInput
    submission?: SubmissionCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsCreateNestedManyWithoutQuestionInput
    topics?: TopicsCreateNestedOneWithoutQuestionInput
  }

  export type QuestionsUncheckedCreateWithoutContestInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    topicId?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
    testCase?: TestCaseUncheckedCreateNestedManyWithoutQuestionsInput
    submission?: SubmissionUncheckedCreateNestedManyWithoutQuestionsInput
    discussion?: DiscussionsUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionsCreateOrConnectWithoutContestInput = {
    where: QuestionsWhereUniqueInput
    create: XOR<QuestionsCreateWithoutContestInput, QuestionsUncheckedCreateWithoutContestInput>
  }

  export type QuestionsCreateManyContestInputEnvelope = {
    data: QuestionsCreateManyContestInput | QuestionsCreateManyContestInput[]
  }

  export type QuestionsUpsertWithWhereUniqueWithoutContestInput = {
    where: QuestionsWhereUniqueInput
    update: XOR<QuestionsUpdateWithoutContestInput, QuestionsUncheckedUpdateWithoutContestInput>
    create: XOR<QuestionsCreateWithoutContestInput, QuestionsUncheckedCreateWithoutContestInput>
  }

  export type QuestionsUpdateWithWhereUniqueWithoutContestInput = {
    where: QuestionsWhereUniqueInput
    data: XOR<QuestionsUpdateWithoutContestInput, QuestionsUncheckedUpdateWithoutContestInput>
  }

  export type QuestionsUpdateManyWithWhereWithoutContestInput = {
    where: QuestionsScalarWhereInput
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyWithoutContestInput>
  }

  export type SubmissionCreateManyStudentInput = {
    id?: string
    questionId: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
  }

  export type StudentAchievementsCreateManyStudentInput = {
    id?: string
    achievementId: string
    count: number
  }

  export type DiscussionsCreateManyStudentInput = {
    id?: string
    type?: string
    questionId?: string | null
    repliedTo?: string | null
    timeOfComment: Date | string
  }

  export type SubmissionUpdateWithoutStudentInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
    questions?: QuestionsUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutStudentInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
  }

  export type StudentAchievementsUpdateWithoutStudentInput = {
    count?: IntFieldUpdateOperationsInput | number
    achievements?: AchievementsUpdateOneRequiredWithoutStudentAchievementsNestedInput
  }

  export type StudentAchievementsUncheckedUpdateWithoutStudentInput = {
    achievementId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAchievementsUncheckedUpdateManyWithoutStudentInput = {
    achievementId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionsUpdateWithoutStudentInput = {
    type?: StringFieldUpdateOperationsInput | string
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionsUpdateOneWithoutDiscussionNestedInput
    toWhomIReply?: DiscussionsUpdateOneWithoutRepliesIGetNestedInput
    repliesIGet?: DiscussionsUpdateManyWithoutToWhomIReplyNestedInput
  }

  export type DiscussionsUncheckedUpdateWithoutStudentInput = {
    type?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    repliedTo?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    repliesIGet?: DiscussionsUncheckedUpdateManyWithoutToWhomIReplyNestedInput
  }

  export type DiscussionsUncheckedUpdateManyWithoutStudentInput = {
    type?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    repliedTo?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateManyTopicsInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    contestId?: string | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
  }

  export type QuestionsUpdateWithoutTopicsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUpdateManyWithoutQuestionsNestedInput
    submission?: SubmissionUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUpdateManyWithoutQuestionNestedInput
    contest?: ContestUpdateOneWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutTopicsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUncheckedUpdateManyWithoutQuestionsNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateManyWithoutTopicsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
  }

  export type TestCaseCreateManyQuestionsInput = {
    id?: string
    inputString: string
    outputString: string
    type?: string
  }

  export type SubmissionCreateManyQuestionsInput = {
    id?: string
    studentId: string
    startTime: Date | string
    maxTimeToSolve: Date | string
    submittedOn?: Date | string | null
    status?: string
    noOfCasesPassed?: number
    pointsSecured?: number
    type?: string
    output1?: string | null
    output2?: string | null
    isFinal?: string
    code?: string | null
    leetCodeLink?: string | null
    language?: string | null
    savedCCode?: string
    savedCppCode?: string
    savedJavaCode?: string
    savedPythonCode?: string
    failedForInput?: string | null
    isChecked?: string
    output1Status?: string
    output2Status?: string
  }

  export type DiscussionsCreateManyQuestionInput = {
    id?: string
    studentId: string
    type?: string
    repliedTo?: string | null
    timeOfComment: Date | string
  }

  export type TestCaseUpdateWithoutQuestionsInput = {
    inputString?: StringFieldUpdateOperationsInput | string
    outputString?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TestCaseUncheckedUpdateWithoutQuestionsInput = {
    inputString?: StringFieldUpdateOperationsInput | string
    outputString?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TestCaseUncheckedUpdateManyWithoutQuestionsInput = {
    inputString?: StringFieldUpdateOperationsInput | string
    outputString?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUpdateWithoutQuestionsInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutQuestionsInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutQuestionsInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxTimeToSolve?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedOn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    noOfCasesPassed?: IntFieldUpdateOperationsInput | number
    pointsSecured?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    output1?: NullableStringFieldUpdateOperationsInput | string | null
    output2?: NullableStringFieldUpdateOperationsInput | string | null
    isFinal?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    savedCCode?: StringFieldUpdateOperationsInput | string
    savedCppCode?: StringFieldUpdateOperationsInput | string
    savedJavaCode?: StringFieldUpdateOperationsInput | string
    savedPythonCode?: StringFieldUpdateOperationsInput | string
    failedForInput?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: StringFieldUpdateOperationsInput | string
    output1Status?: StringFieldUpdateOperationsInput | string
    output2Status?: StringFieldUpdateOperationsInput | string
  }

  export type DiscussionsUpdateWithoutQuestionInput = {
    type?: StringFieldUpdateOperationsInput | string
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutDiscussionNestedInput
    toWhomIReply?: DiscussionsUpdateOneWithoutRepliesIGetNestedInput
    repliesIGet?: DiscussionsUpdateManyWithoutToWhomIReplyNestedInput
  }

  export type DiscussionsUncheckedUpdateWithoutQuestionInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    repliedTo?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    repliesIGet?: DiscussionsUncheckedUpdateManyWithoutToWhomIReplyNestedInput
  }

  export type DiscussionsUncheckedUpdateManyWithoutQuestionInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    repliedTo?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementsCreateManyAchievementsInput = {
    id?: string
    studentId: string
    count: number
  }

  export type StudentAchievementsUpdateWithoutAchievementsInput = {
    count?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutStudentAchievementsNestedInput
  }

  export type StudentAchievementsUncheckedUpdateWithoutAchievementsInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type StudentAchievementsUncheckedUpdateManyWithoutAchievementsInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionsCreateManyToWhomIReplyInput = {
    id?: string
    studentId: string
    type?: string
    questionId?: string | null
    timeOfComment: Date | string
  }

  export type DiscussionsUpdateWithoutToWhomIReplyInput = {
    type?: StringFieldUpdateOperationsInput | string
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutDiscussionNestedInput
    question?: QuestionsUpdateOneWithoutDiscussionNestedInput
    repliesIGet?: DiscussionsUpdateManyWithoutToWhomIReplyNestedInput
  }

  export type DiscussionsUncheckedUpdateWithoutToWhomIReplyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
    repliesIGet?: DiscussionsUncheckedUpdateManyWithoutToWhomIReplyNestedInput
  }

  export type DiscussionsUncheckedUpdateManyWithoutToWhomIReplyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    questionId?: NullableStringFieldUpdateOperationsInput | string | null
    timeOfComment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionsCreateManyContestInput = {
    id?: string
    title: string
    description: string
    miniDescription?: string | null
    topicId?: string | null
    noOfHiddenTestCases?: number
    noOfExternalTestCases?: number
    difficulty?: string
    pointsPerTestCaseSolved: number
    type?: string
    leetCodeLink?: string | null
    leetCodeTitle?: string | null
    timeToSolveInMinutes?: number | null
    JavaImports?: string
    JavaBoilerCode?: string
    CBoilerCode?: string
    CppBoilerCode?: string
    PythonBoilerCode?: string
  }

  export type QuestionsUpdateWithoutContestInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUpdateManyWithoutQuestionsNestedInput
    submission?: SubmissionUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUpdateManyWithoutQuestionNestedInput
    topics?: TopicsUpdateOneWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateWithoutContestInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
    testCase?: TestCaseUncheckedUpdateManyWithoutQuestionsNestedInput
    submission?: SubmissionUncheckedUpdateManyWithoutQuestionsNestedInput
    discussion?: DiscussionsUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionsUncheckedUpdateManyWithoutContestInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    miniDescription?: NullableStringFieldUpdateOperationsInput | string | null
    topicId?: NullableStringFieldUpdateOperationsInput | string | null
    noOfHiddenTestCases?: IntFieldUpdateOperationsInput | number
    noOfExternalTestCases?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    pointsPerTestCaseSolved?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    leetCodeLink?: NullableStringFieldUpdateOperationsInput | string | null
    leetCodeTitle?: NullableStringFieldUpdateOperationsInput | string | null
    timeToSolveInMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    JavaImports?: StringFieldUpdateOperationsInput | string
    JavaBoilerCode?: StringFieldUpdateOperationsInput | string
    CBoilerCode?: StringFieldUpdateOperationsInput | string
    CppBoilerCode?: StringFieldUpdateOperationsInput | string
    PythonBoilerCode?: StringFieldUpdateOperationsInput | string
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