import emailjs from 'emailjs-com'

const submit = (name, email, message) => {
    if(name && email && message) {
        const serviceId = 'service_jcjqat4'
        const templateId = 'template_bbtdllj'
        const userId = 'user_9q7DlrkhVKyOQX0hE4im9'
        const templateParams = {
            name,
            email,
            message
        }

        return emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log("Success!", response.status, response.text))
            .then(error => console.log("Failed...", error))
    }

    return alert('Please fill in all of the fields')
}

export default submit