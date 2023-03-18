export default function HttpResponse(res, httpCode, message=''){
    return res.status(httpCode).send(message);
}