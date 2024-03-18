import { useEffect } from "react";

const Map = () => {
    useEffect(() => {
        const initMap = () => {
            const latLng = { lat: 32.66205250675709, lng: -96.69205191446851 };

            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 7.8,
                center: latLng,
            });

            const marker = new google.maps.Marker({
                position: latLng,
                map,
                title: "Rogers Wildlife Rehabilitation Center",
            });

            const infowindow = new google.maps.InfoWindow({
                content: `
                        <div>
                            <h3>Rogers Wildlife Rehabilitation Center</h3>
                            <p>1430 E Cleveland St, Hutchins, TX 75141</p>
                            <h4 style="color: blue; margin-top: .75rem"><a href="https://www.google.com/maps/dir/?api=1&destination=${latLng.lat},${latLng.lng}" target="_blank">Get Directions</a></h4>
                        </div>
                `,
            });

            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        };

        if (typeof window !== "undefined" && typeof window.google !== "undefined") {
            initMap();
        } else {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBAodzkDuixpYMyM080XalJSpPZwPmcbRA&callback=initMap`;
            script.async = true;
            script.defer = true;
            window.initMap = initMap;
            document.head.appendChild(script);
        }
    }, []);

    return <div id="map" style={{ height: "300px", width: "100%" }} />;
};

export default Map;
