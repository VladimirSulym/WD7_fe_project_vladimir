import React from 'react'
import {useSelector} from "react-redux";

export function BrandFilter () {
        const dataList = useSelector(
            (store)=>{
                return store.app.brandList;
            }
        );

        function renderList (item) {
            return (
                <div className="form-check" key={item.id}>
                    <input className="form-check-input" type="checkbox" value="" id="amado"/>
                    <label className="form-check-label" htmlFor="amado">{item.title}</label>
                </div>
            )
        }


        return (
        <div className="widget brands mb-50">
                <h6 className="widget-title mb-30">Brands</h6>
                <div className="widget-desc">
                    {
                        dataList.map(renderList)
                    }
                </div>
        </div>
    )
}