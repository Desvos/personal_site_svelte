<script>
    import { PUBLIC_EMAILJS_PUBLIC_KEY } from '$env/static/public';
    import { browser } from "$app/environment";
    import { showSuccessToast, showErrorToast } from "$lib/toast-actions";
    import emailjs from "@emailjs/browser";

    let formIsSending = false

    function resetForm(){
        if (browser) {
            var contactForm = document.getElementById("contactForm");
            contactForm.reset()
        }
    }

    function sendEmail(e) {
        formIsSending = true
        emailjs
            .sendForm(
                "service_personal_site_1",          //"YOUR_SERVICE_ID"
                "template_personal_site_1",         //"YOUR_TEMPLATE_ID"
                e.target,
                PUBLIC_EMAILJS_PUBLIC_KEY           //"YOUR_PUBLIC_KEY"
            )
            .then(
                (result) => {
                    formIsSending = false
                    showSuccessToast("Your email has been sent. Thank you for reaching out!")
                    resetForm()
                },
                (error) => {
                    formIsSending = false
                    showErrorToast("Sending failed...Retry later or write on my email directly: antonio.devivo@yahoo.com")
                }
            );
    }
</script>

<h1 class="text-center">Contact Form</h1>

<form id="contactForm" on:submit|preventDefault={sendEmail}>
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

    {#if !formIsSending}
        <button type="submit" id="cf_submit" class="btn btn-primary btn-rounded">Submit</button>
    {:else}
        <button type="submit" id="cf_submit" class="btn btn-primary btn-rounded" disabled>
            Submit &nbsp;
            <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </button>
    {/if}
    
    
</form>
