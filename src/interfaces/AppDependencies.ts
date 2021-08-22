export interface AppDependencies {
  env: { [key: string]: string | undefined };
  fetch(request: RequestInfo): Promise<unknown>;
}
