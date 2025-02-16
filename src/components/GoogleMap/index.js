import React from 'react';
import styles from './GoogleMap.module.scss';

export default function GoogleMap() {
    return (
        <div className={styles.mapContainer}>
            <iframe
                title="Google Map"
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799124101!2d-74.25987568700785!3d40.69767006312512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6f508f4e1b1%3A0x5a53eb3e18e4aede!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1649731334923!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
            ></iframe>
            <a
                href="https://www.google.com/maps/place/123+Main+Street,+New+York,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLinkButton}
            >
                View on Google Maps
            </a>
        </div>
    );
}
