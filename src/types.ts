// Note: GraphQL Context
/**
 * GraphQL Context
 * @export
 * @interface GraphQLContext
 * @see https://docs.nestjs.com/graphql/context
 */
export interface GraphQLContext {
  /**
   * Request
   * @type {Request}
   * @memberof GraphQLContext
   * @see https://expressjs.com/en/api.html#req
   */
  req: Request & {
    /**
     * User
     * @type {object}
     * @memberof GraphQLContext
     * @see https://tools.ietf.org/html/rfc7519#section-4
     */
    user: {
      /**
       * User ID
       * @type {string}
       * @memberof GraphQLContext
       * @see https://tools.ietf.org/html/rfc7519#section-4.1.1
       */
      username: string;
      /**
       * Subject
       * @type {string}
       * @memberof GraphQLContext
       * @see https://tools.ietf.org/html/rfc7519#section-4.1.2
       */
      sub: string;
      /**
       * Issued at
       * @type {number}
       * @memberof GraphQLContext
       * @see https://tools.ietf.org/html/rfc7519#section-4.1.6
       */
      iat: number;
      /**
       * Expiration time
       * @type {number}
       * @memberof GraphQLContext
       * @see https://tools.ietf.org/html/rfc7519#section-4.1.4
       */
      exp: number;
    };
  };
  /**
   * Response
   * @type {Response}
   * @memberof GraphQLContext
   * @see https://expressjs.com/en/api.html#res
   */
  res: Response;
}
