import Repository, { baseDomain, serializeQuery } from "./Repository";

const swell = require('swell-js');
swell.init('sailfish-e-commerce-limited', 'pk_392OXy2LAsQCLz7F9EQHEQ5tnVhAak6x');

export async function getTotalRecords() {
    const reponse2 = await swell.products.list({
        limit: 25,
        page: 1
    }).then((response) => {
        //return response.results;
        console.log(response.results);
    }).catch((error) => ({ error: JSON.stringify(error) }));;

    const reponse = await Repository.get(`${baseDomain}/products/count`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;
}

export async function getProductsByIds(payload) {
    const reponse = await swell.products.get(payload).then((response) => {
        console.log(response);
        return response;
        
    })
    .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;


    /*const endPoint = `${baseDomain}/products?${payload}`;
    const reponse = await Repository.get(endPoint)
        .then((response) => {
            return {
                items: response.data,
            };
        })

        .catch((error) => ({ error: JSON.stringify(error) }));
    return reponse;*/
}

class ProductRepository {
    async getProducts(params) {
        const reponse = await swell.products.list({
            limit: 25,
            page: 1
        }).then((response) => {
            console.log(response.results);
            if (response.results && response.results.length > 0) {
                return response.results;
            } else {
                return null;
            }
        }).catch((error) => {
            console.log(JSON.stringify(error));
            return null;
        });
        return reponse;

        /*const reponse = await Repository.get(
            `${baseDomain}/products?${serializeQuery(params)}`
        )
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return response.data;
                } else {
                    return null;
                }
            })

            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;*/
    }

    async getProductsById(payload) {
        const reponse = await swell.products.get(payload).then((response) => {
            console.log(response);
            return response;
            
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
        /*const reponse = await Repository.get(
            `${baseDomain}/products/${payload}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;*/
    }

    async getProductsByIds(payload) {
        const reponse = await swell.products.get(payload).then((response) => {
            console.log(response);
            return response;
            
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;

        /*const endPoint = `${baseDomain}/products?${payload}`;
        const reponse = await Repository.get(endPoint)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return response.data;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                return null;
            });
        return reponse;*/
    }

    async getProductCategories() {
        const reponse = await Repository.get(`${baseDomain}/product-categories`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getPrductCategoryBySlug(payload) {
        const reponse = await Repository.get(
            `${baseDomain}/product-categories?slug=${payload}`
        )
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    return response.data[0];
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(JSON.stringify(error.message));
                return null;
            });
        return reponse;
    }

    async getProductsByPriceRange(payload) {
        const reponse = await Repository.get(
            `${baseDomain}/products?${serializeQuery(payload)}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new ProductRepository();
