'use strict';

import PostDAO from '../DAO/postDAO';

function create(context) {
    async function query() {
        let result = await PostDAO.query();
        if (result) {
            return result;
        }
    }

    return {
        query: query
    };
}

export default {
    create: create
};