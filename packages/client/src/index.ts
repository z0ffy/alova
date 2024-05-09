export {
  createClientTokenAuthentication,
  createServerTokenAuthentication
} from '@/functions/tokenAuthentication/createTokenAuthentication';
export { default as useFetcher } from '@/hooks/core/useFetcher';
export { default as useRequest } from '@/hooks/core/useRequest';
export { default as useWatcher } from '@/hooks/core/useWatcher';
export { default as useSerialRequest } from '@/hooks/serial/useSerialRequest';
export { default as useSerialWatcher } from '@/hooks/serial/useSerialWatcher';
export {
  bootSilentFactory,
  onBeforeSilentSubmit,
  onSilentSubmitBoot,
  onSilentSubmitError,
  onSilentSubmitFail,
  onSilentSubmitSuccess
} from '@/hooks/silent/silentFactory';
export { silentQueueMap } from '@/hooks/silent/silentQueue';
export { default as dehydrateVData } from '@/hooks/silent/virtualResponse/dehydrateVData';
export { default as equals } from '@/hooks/silent/virtualResponse/equals';
export { filterSilentMethods, getSilentMethod } from '@/hooks/silent/virtualResponse/filterSilentMethods';
export { default as isVData } from '@/hooks/silent/virtualResponse/isVData';
export { default as stringifyVData } from '@/hooks/silent/virtualResponse/stringifyVData';
export { default as updateStateEffect } from '@/hooks/silent/virtualResponse/updateStateEffect';
export { accessAction } from '@/middlewares/actionDelegation';
export { default as updateState } from '@/updateState';

export const usePagination = (handler, config = {}) =>
  usePagination_unified(handler, config, $, $$, upd$, _$, _exp$, _expBatch$, watch$, useFlag$, useRequestRefState$, useMemorizedCallback$);

// 已通过 hooks/silent/useSQRequest 导入测试
/* c8 ignore start */
export const useSQRequest = (handler, config = {}) => useSQRequest_unified(handler, config);

export { actionDelegationMiddleware } from '@/middlewares/actionDelegation';

export { default as usePagination } from '@/hooks/pagination/usePagination';
export { default as useSQRequest } from '@/hooks/silent/useSQRequest';
export { default as useAutoRequest } from '@/hooks/useAutoRequest';
export { default as useCaptcha } from '@/hooks/useCaptcha';
export { default as useForm } from '@/hooks/useForm';
export { default as useRetriableRequest } from '@/hooks/useRetriableRequest';
export { default as useSSE } from '@/hooks/useSSE';

// forEach(objectKeys(useAutoRequest_unified), key => {
//   defineProperty(
//     useAutoRequest,
//     key,
//     {
//       get: () => useAutoRequest_unified[key],
//       set: value => (useAutoRequest_unified[key] = value)
//     },
//     trueValue
//   );
// });
