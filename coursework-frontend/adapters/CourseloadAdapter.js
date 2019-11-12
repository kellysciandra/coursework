class CourseloadsAdapter {
    constructor() {
        this.baseUrl =
            'http://localhost:3000/api/v1/courseloads'
    }
    // fetch to Courseloads
    async getCourseloads() {
        const res = await fetch(this.baseUrl)
        return await res.json()
    }

    // post to courseloads 
    async createCourseload() {
        // const formData = {
        //     language: document.getElementById('language-input').value,
        //     // reference: document.getElementById('reference-input').value,
        //     // general: document.getElementById('general-input').value,
        // }
        const res = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({

                language: document.getElementById('language-input').value,
                framework: document.getElementById('framework-input').value,
                general: document.getElementById('general-input').value,
                link: document.getElementById('link-input').value,
            })
        })
        return await res.json()

    }
}