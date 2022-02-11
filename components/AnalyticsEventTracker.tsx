import React, { useEffect } from 'react';

declare global {
    interface Window {
        gtag: any;
        mixpanel: any;
    }
}

type Event = {
    eventType: "click" | "view" | "impression",
    eventName: string,
    data?: any
}

export interface AnalyticsEventTrackerProps {
    children?: any,
    events: Event[]
  }

export default function AnalyticsEventTracker(props: AnalyticsEventTrackerProps) {

    useEffect(() => {
        handleOnPageViewed()
    });

    function getTrackableEvents(eventType:string) {
        return props.events.filter(_event => _event.eventType === eventType);
    }

    function dispatchAnalytics(event: Event) {
        let mixpanel: any = window.mixpanel;
        mixpanel.track(event.eventName, {
            ...event.data
        })
    }

    /** 
     * PAGE VIEW
     */
    function handleOnPageViewed() {
        let viewEvents = getTrackableEvents("view");
        viewEvents.map(viewEvent => {
            dispatchAnalytics(viewEvent)
        });
    }
    
    /**
     * COMPONENT CLICK 
     */
    function handleOnClick() {
        let clickEvents = getTrackableEvents("click")
        clickEvents.map(clickEvent => {
            dispatchAnalytics(clickEvent)
        });
    }

    return <span onMouseDown={handleOnClick}>{props.children}</span>
}