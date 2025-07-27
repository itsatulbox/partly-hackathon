import axios from "axios";

const apiKey = `eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5kZXY0LnBhcnRseS5wcm8vIiwic3ViIjoiMmJiOTJjNTktMGEzYi00MTViLThiMGMtMjkwODA0YjE2ZWU0IiwiaWF0IjoxNzUzNTYwNzEwLCJleHAiOjE3NTM2NjA4MDAsImp0aSI6ImFwaWtleTo2N2NhMzI5Yy05MTdjLTQyYTctODBjNy1lNDVjMDQyYjA1NWIiLCJhdXRob3JpemF0aW9uX2RldGFpbHMiOlt7Imlzc3VlciI6Ii9hcGkvdjEvcmVwYWlyZXJzLnZlcmlmeSIsInBhcmFtZXRlcnMiOnsicmVwYWlyZXJfaWQiOiIzYjUzMGMxYi0xY2M5LTRhNWEtYjVjMC0zMWVkYWFmZTBlZTMifSwiZGV0YWlscyI6eyJvcmdhbml6YXRpb25faWQiOiIwYmUwODYwNi01YjA5LTRmZjItYjhmNC1jZDk4NTNmYWU0NjMiLCJyZXBhaXJlcl9pZCI6IjNiNTMwYzFiLTFjYzktNGE1YS1iNWMwLTMxZWRhYWZlMGVlMyIsInNpdGVfaWRzIjpbXX19LHsiaXNzdWVyIjoiL2FwaS92MS9vcmdhbml6YXRpb25zLnZlcmlmeSIsInBhcmFtZXRlcnMiOnsib3JnYW5pemF0aW9uX2lkIjoiMGJlMDg2MDYtNWIwOS00ZmYyLWI4ZjQtY2Q5ODUzZmFlNDYzIn0sImRldGFpbHMiOnsiaWQiOiIwYmUwODYwNi01YjA5LTRmZjItYjhmNC1jZDk4NTNmYWU0NjMiLCJwZXJtaXNzaW9ucyI6W3sic2NvcGUiOiJvcmdhbml6YXRpb25fYWRtaW5zIiwiZW50aXR5IjoiMGJlMDg2MDYtNWIwOS00ZmYyLWI4ZjQtY2Q5ODUzZmFlNDYzIn0seyJzY29wZSI6ImJ1c2luZXNzX2FkbWlucyJ9XX19XX0.KifouEvuucUP4UeRht2Uj_2V7LA8O9D-1JSuQSVdGTlT1k3hMjIZIxM8vZQE9l13BREjIYCidRn9Mk0pKp_IUg`

const requestBody = {
                            "identifier": {
                            "plate": "NEPAL1",
                                "region": "UREG32",  // NZ - always set to UREG32.
                                "state": null // Always set to null for NZ.
                        },
                        "languages": [
                            "en-NZ",
                            "en"
                        ]
                    }


const apiClient = axios.create({
    baseURL: "https://api.dev4.partly.pro/"
})


export async function getVechicleInformation(licensePlate) {

    const requestBody = {
        "identifier": {
            "plate": `${licensePlate}`,
            "region": "UREG32",  // NZ - always set to UREG32.
            "state": null // Always set to null for NZ.
        },
        "languages": [
            "en-NZ",
            "en"
        ]
    }

    apiClient.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;

    const response = await apiClient.post(`api/v1/vehicles.search`, requestBody);
    return response.data;

}

export default apiClient;

