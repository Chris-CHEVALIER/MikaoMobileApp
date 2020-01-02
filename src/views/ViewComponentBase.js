import React from "react";

/**
 * A base component that contains some util methods.
 */
export default class ViewComponentBase extends React.Component {
    addListener(store, callback) {
        if (!this.listeners) {
            this.listeners = [];
        }
        this.listeners.push(store.addListener(callback));
    }

    removeListeners() {
        if (!this.listeners) {
            return;
        }
        this.listeners.map(l => {
            l.remove();
        });
        this.listeners = [];
    }
}
