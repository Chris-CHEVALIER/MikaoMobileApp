import BaseUrlConstants from '../constants/BaseUrlConstants';
import axios from 'axios';

class TreatmentService  {
    /**
     * Get a treatment by unique identifier.
     * @param {number} treatmentId The identifier of the treatment.
     * @returns {Promise} A promise to handle the request ascynchronously.
     */

    getById(treatmentId) {
        return axios({
            url: `${BaseUrlConstants.BASE_URL}treatments/${treatmentId}`,
            method: 'GET',
        });
    }
    
    /**
     * Get all treatments.
     *
     * @returns {Promise} A promise to handle the request ascynchronously.
     */
    getAll() {
        return axios({
            url: `${BaseUrlConstants.BASE_URL}treatments/`,
            method: "get",
            
        });
    }

    /**
     * Post a new treatment.
     * @param {Object} treatment The treatment to create.
     * @returns {Promise} A promise to handle the request ascynchronously.
     */
    post(treatment) {
        return axios({
            url: `${BaseUrlConstants.BASE_URL}treatments/`,
            method: 'POST',
            data: treatment,
        });
    }

    /**
     * Patch an existing resource. Only the properties that are set on the patch will be updated.
     * @param {number} id The identifier of the report.
     * @param {Object} patch The properties to update.
     * @returns {Promise} A promise to handle the request ascynchronously.
     */
    patch(id, patch) {
        return axios({
            url: `${BaseUrlConstants.BASE_URL}treatments/${id}/`,
            method: 'PATCH',
            data: patch,
        });
    }

    /**
     * Delete an existing host treatment.
     * @param {number} id The identifier of the user.
     * @returns {Promise} A promise to handle the request ascynchronously.
     */
    remove(id) {
        return axios({
            url: `${BaseUrlConstants.BASE_URL}treatments/${id}/`,
            method: 'DELETE',
        });
    }
}

export default new TreatmentService();
