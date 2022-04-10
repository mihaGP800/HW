import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import preloader from '../../Assets/preloader2.gif'

function HW10() {

    let loading = useSelector<AppStoreType, boolean>(state => state.loading.isloading)

    let dispatch = useDispatch()
    // useSelector, useDispatch

    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
        setTimeout(() => {
            console.log('loading is finish')
            dispatch(loadingAC(false))
        }, 1000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={preloader} alt="preloader"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading} default1>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
