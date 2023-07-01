<script>
    import { PUBLIC_EMAILJS_PUBLIC_KEY } from '$env/static/public';
    import emailjs from "@emailjs/browser";

    function sendEmail(e) {
        emailjs
            .sendForm(
                "service_personal_site_1",          //"YOUR_SERVICE_ID"
                "template_personal_site_1",         //"YOUR_TEMPLATE_ID"
                e.target,
                PUBLIC_EMAILJS_PUBLIC_KEY           //"YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    }
</script>

<h1 class="text-center">Contact Form</h1>

<form on:submit|preventDefault={sendEmail}>
    <div class="row">
        <div class="col-12 col-lg-6">
            <!-- name -->
            <div class="form-group">
                <label for="name">Name</label>
                <input
                    type="name"
                    name="name"
                    class="form-control"
                    id="cf_name"
                    placeholder="Enter your name"
                />
            </div>
        </div>

        <div class="col-12 col-lg-6">
            <!-- email -->
            <div class="form-group">
                <label for="email">Email address</label>
                <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="cf_email"
                    placeholder="Enter your email"
                />
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <!-- subject -->
            <div class="form-group">
                <label for="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    class="form-control"
                    id="cf_subject"
                    placeholder="Enter your subject"
                />
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    class="form-control"
                    id="cf_message"
                    name="message"
                    rows="5"
                />
            </div>
        </div>
    </div>

    <br />

    <button type="submit" id="cf_submit" class="btn btn-primary">Submit</button>
</form>
