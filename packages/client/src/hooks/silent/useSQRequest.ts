import useRequest from '@/hooks/core/useRequest';
import { noop } from '@alova/shared/function';
import { promiseResolve, undefinedValue } from '@alova/shared/vars';
import { AlovaGenerics } from 'alova';
import { AlovaMethodHandler } from '~/typings';
import { SQRequestHookConfig } from '~/typings/general';
import createSilentQueueMiddlewares from './createSilentQueueMiddlewares';

export default function useSQRequest<AG extends AlovaGenerics>(
  handler: AlovaMethodHandler<AG>,
  config: SQRequestHookConfig<AG> = {}
) {
  const { middleware = noop } = config;
  const {
    c: methodCreateHandler,
    m: silentMiddleware,
    b: binders,
    d: decorateEvent
  } = createSilentQueueMiddlewares(handler, config);
  const states = useRequest(methodCreateHandler, {
    ...config,
    middleware: (ctx, next) => {
      middleware(ctx, () => promiseResolve(undefinedValue as any));
      return silentMiddleware(ctx, next);
    }
  });
  decorateEvent(states);

  return {
    ...states,
    ...binders
  };
}
