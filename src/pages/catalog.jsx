import React from 'react';
import OneItem from '../components/catalogelement/oneItem'
import { useSelector,useDispatch } from 'react-redux';
import { CatalogFilter } from '../components/filter/index'

function getCategoryID (categoryName, categoryList) {
    let res='';
categoryList.forEach((item) => {
    if (item.url == categoryName) {
        res = item.id;
    };
    }
)
    return res;
}

function CatalogPage(props) {
    const catalogList = useSelector((store)=> store.app.catalogList);
    const filter = useSelector((store)=> store.app.filter);
    const categoryList = useSelector((store)=> store.app.categoryList);
    console.log("PROPS - > ",props);
    const CategoryID = getCategoryID(props.match.params.categoryName, categoryList);
    console.log("CategoryID - >", CategoryID);
    function filterCategory (item) {
        return CategoryID === item.category
    }
    return (
        <>
        <CatalogFilter/>
        <div className="amado_product_area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    {
                        catalogList.filter(filterCategory).map((item)=> <OneItem
                            id = {item.id}
                            title = {item.title}
                            price = {item.price}
                            img_url = {item.img_url}
                        /> )
                    }
                </div>
            </div>
        </div>
        </>
    );
}

export default CatalogPage;