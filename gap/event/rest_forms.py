from rest_framework.response import Response
from rest_framework.decorators import api_view
import geocoder


@api_view(["GET", "POST"])
def convert(request):
    breakpoint()
    if request.method == "POST":
        address = request.data
        ret = geocoder.osm(address, timeout=5.0)
        return Response(
            {"message": "success", "latitude": ret.lat, "longitude": ret.lng}
        )
    return Response({"message": "failure"})
