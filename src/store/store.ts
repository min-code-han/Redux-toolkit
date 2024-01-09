import { configureStore } from "@reduxjs/toolkit";
import { personSlice } from "./features/personSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer:{
        person: personSlice.reducer,
    }
})

// useDispatch 를 useAppDispatch 이라는 이름으로 사용할건데, useAppDispatch 는 dispatch 와 동일한 타입의 함수를 리턴 할 것이다 !!
// 이렇게 하면 액션을 디스패치할 때마다 타입스크립트의 타입 체크를 활용할 수 있어, 코드의 안정성을 높일 수 있다 !!
export const useAppDispatch: ()=>typeof store.dispatch = useDispatch

// useSelector 를 useAppSelector 라는 이름으로 사용할건데, store 의 상태 타입을 리턴할 것이다 !!
// TypedUseSelectorHook = React-Redux 라이브러리에서 제공하는 타입으로, Redux 스토어의 상태(state)를 선택(select)할 때 사용하는 훅(hook)의 타입
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
