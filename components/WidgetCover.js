
import styles from '../styles/Home.module.css'
// add forward ref import
import { useState, useEffect, forwardRef } from 'react';

 function WidgetCover(props, ref){

    const {children} = props;

    return (
        /**
         * widgetCover : holds the widget flex-centered. 
         *      currently taking 50% width and 100% height
         *      of its parent container (widgetholder).
         */
        <div ref={ref} className={styles.widgetCover} flag="false">

            { children }

        </div>
    )
}

const forwardedWC = forwardRef(WidgetCover);
export default forwardedWC;