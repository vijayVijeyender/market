import { createTypedHooks } from "easy-peasy";
import { AppStoreModel } from ".";


const {useStoreActions, useStoreState, useStoreDispatch, useStore} =createTypedHooks<AppStoreModel>();
export {useStoreActions, useStoreState, useStoreDispatch, useStore};