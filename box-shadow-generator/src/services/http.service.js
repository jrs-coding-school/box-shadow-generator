const DOMAIN = 'localhost:8080'
const URL = `http://${DOMAIN}/api`;

function getAllDesigns() {
    return `${URL}/designs`;
}

function getDesignById(id) {
    return `${URL}/designs/${id}`;
}

export default {
    getAllDesigns,
    getDesignById
};