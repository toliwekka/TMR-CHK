// Declare the appropriate variable for questions to use
let questionsToUse = []; // Default to an empty array to prevent errors
let currentQuestionIndex = 0; // Track current question index
let PartAScore = 0; // Track current question index
let PartBScore = 0; // Track current question index
let SectionalTitle = "";

let AScoreA = 0; // Track current question index
let BScoreB = 0; // Track current question index

// Define globally at the top of the file
let scoreTrendData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
        {
            label: "Part A Score",
            data: [60, 63, 65, 62, 64],
            borderColor: "#f1c40f",
            backgroundColor: "rgba(241, 196, 15, 0.2)",
            fill: true,
            tension: 0.4,
            pointRadius: 5,
        },
        {
            label: "Part B Score",
            data: [40, 45, 43, 47, 44],
            borderColor: "#ff8c00",
            backgroundColor: "rgba(255, 140, 0, 0.2)",
            fill: true,
            tension: 0.4,
            pointRadius: 5,
        },
    ],
};

const messages = {
    green: [
        "🌱 You're thriving! Keep nourishing your mind and body.",
        "💪 Your mental health is solid — maintain this balance!",
        "🏆 Keep up the great work — you're in a good place mentally.",
        "🌞 You're radiating positive energy — keep spreading it!",
        "🌈 Your emotional strength is showing — keep trusting yourself.",
        "🔥 You're handling life beautifully — stay confident and keep going!",
        "🌟 Your mind and heart are in sync — enjoy this harmony.",
        "🚀 You're mentally strong — the sky's the limit!",
        "🌍 You're balanced and centered — keep walking your path with pride.",
        "✨ Your mental health is glowing — stay inspired!",
        "💖 You're doing amazing — trust the process and keep moving forward.",
        "🌠 You're creating positive waves — others feel your energy!",
        "🌸 You're at peace with yourself — this inner calm is powerful.",
        "🏅 You've got the mental strength of a champion — keep winning!",
        "🌺 You're on the right path — let your heart guide you.",
        "🎯 Your focus and clarity are admirable — stay on this course.",
        "🌅 You're radiating calm — your mind and soul are in sync.",
        "🍀 You're in a good place — keep trusting your journey.",
        "🦋 Your resilience is showing — you're transforming beautifully.",
        "🌴 Keep your pace — your mind is aligned with your purpose.",
    ],
    yellow: [
        "💡 Take time for self-care — Your mind deserves some rest!",
        "🍃 You're doing okay, but remember to breathe and reset.",
        "✨ You're managing well — maybe a small break will help.",
        "🌺 A bit of relaxation could do wonders for you right now.",
        "💖 Be kind to yourself — you're doing better than you think.",
        "🌤️ A little rest will recharge your energy — you've got this!",
        "🧘‍♂️ Take a moment to reconnect with yourself.",
        "💫 Slow down and focus on what brings you peace.",
        "🌼 You're on the right track — small adjustments will help you thrive.",
        "🌄 Take a deep breath — you’ve got this under control.",
        "🪴 Balance is within reach — take one step at a time.",
        "🌙 Let yourself rest — you don’t have to figure it all out today.",
        "🍃 Your mind is asking for a pause — give it what it needs.",
        "💭 Sometimes slowing down is the fastest way to heal.",
        "🌤️ You're not stuck — just recalibrating your path.",
        "🌈 Progress isn’t linear — you’re still moving forward.",
        "💆‍♀️ Loosen your grip — peace is found in stillness.",
        "🌷 You’re adjusting — give yourself grace.",
        "🔅 A small reset could open big doors.",
        "🌿 Listen to your inner voice — it knows what you need.",
    ],
    orange: [
        "⚠️ You might be under stress — slow down and breathe.",
        "🌅 Take time to reconnect with yourself.",
        "🌙 Consider some relaxation time to ease the tension.",
        "🌌 It's okay to feel overwhelmed — take one step at a time.",
        "💛 Reach out to someone you trust — you’re not alone.",
        "🍂 Take a mindful pause — let go of what you can't control.",
        "🧡 Self-care isn’t selfish — it’s necessary.",
        "🌧️ It's okay to ask for help — strength comes from vulnerability.",
        "🌊 Let go of what's weighing you down — seek calmness.",
        "🪐 You're not alone in this — seek support when you need it.",
        "🌒 Your mind needs space — give yourself room to breathe.",
        "🔥 Let go of the pressure — focus on your inner calm.",
        "💔 You’re not weak for needing rest — strength grows in stillness.",
        "🎯 You’re not lost — you’re finding your way.",
        "🌁 The fog will clear — keep moving through it.",
        "🌥️ It’s okay to lean on others — connection is healing.",
        "🖤 You're processing a lot — give yourself patience.",
        "🧭 Adjust your direction — clarity will follow.",
        "🌬️ Exhale the stress — you're closer to calm than you think.",
        "🌉 One step at a time — the bridge is there when you're ready.",
    ],
    red: [
        "🚨 It's important to reach out for support — you are not alone.",
        "❤️ You matter — talk to someone you trust today.",
        "🛑 Your mental health needs attention — seek help soon.",
        "🆘 You're not in this alone — help is closer than you think.",
        "🌹 Your feelings are valid — let someone help you through them.",
        "❗ Your mind needs care — don't hesitate to seek guidance.",
        "💔 You deserve support — reach out to someone who can help.",
        "🚑 Your well-being matters — let someone know how you're feeling.",
        "🔴 It’s okay to feel vulnerable — strength comes from seeking help.",
        "🌙 Take a small step today — it’s a path toward healing.",
        "🛟 Your feelings are valid — you don’t have to carry them alone.",
        "🌌 You're not broken — healing begins with asking for help.",
        "🦺 It's okay to need support — strength grows in connection.",
        "🌑 Darkness will pass — reach for a light.",
        "💥 You don't have to fight this alone — help is within reach.",
        "🌪️ It’s okay to struggle — finding balance starts with asking for help.",
        "🏳️‍⚕️ Seeking help isn’t weakness — it’s courage.",
        "🚸 Your mental health is important — take the first step.",
        "🕯️ You don’t have to see the whole path — just take the next step.",
        "🤝 Support is waiting — reach out today.",
    ],
};

// Questions Data (must be declared before any function usage)
const questions = [
    { id: 1, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been feeling optimistic about the future.", answerType: "MentalWellBeing" },
    { id: 2, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been feeling useful", answerType: "MentalWellBeing" },
    { id: 3, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been feeling relaxed", answerType: "MentalWellBeing" },
    { id: 4, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been feeling interested in other people", answerType: "MentalWellBeing" },
    { id: 5, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve had energy to spare", answerType: "MentalWellBeing" },
    { id: 6, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been dealing with problems well", answerType: "MentalWellBeing" },
    { id: 7, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been thinking clearly", answerType: "MentalWellBeing" },
    { id: 8, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been feeling good about myself", answerType: "MentalWellBeing" },
    { id: 9, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been feeling close to other people", answerType: "MentalWellBeing" },
    { id: 10, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been feeling confident", answerType: "MentalWellBeing" },
    { id: 11, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been able to make up my own mind about things", answerType: "MentalWellBeing" },
    { id: 12, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been feeling loved", answerType: "MentalWellBeing" },
    { id: 13, section: "Section A", pastcoupledays: "During the past 14 days", text: "I’ve been interested in new things", answerType: "MentalWellBeing" },
    { id: 14, section: "Section A", pastcoupledays: "During the past 14 days", text: "I've been feeling cheerful", answerType: "MentalWellBeing" },
];

const questionsII = [
    {
        id: 1,
        section: "Life Satisfaction and Life Evaluation",
        pastcoupledays: "",
        text:
            "Please imagine a ladder with steps numbered from zero at the bottom to ten at the top. The top of the ladder represents the best possible life for you, and the bottom of the ladder represents the worst possible life for you. On which step of the ladder would you say you personally feel you stand at this time?",
        answerType: "Worst-Best",
    },
    { id: 2, section: "Life Satisfaction and Life Evaluation", pastcoupledays: "", text: "On which step do you think you will stand about five years from now?", answerType: "Worst-Best" },
    { id: 3, section: "Life Satisfaction and Life Evaluation", pastcoupledays: "", text: "Overall, how satisfied are you with life as a whole these days?", answerType: "Satisfaction" },
    { id: 4, section: "Physical Health, Mental Health, and Physical Function", pastcoupledays: "", text: "In general, how would you rate your physical health?", answerType: "Health" },
    { id: 5, section: "Physical Health, Mental Health, and Physical Function", pastcoupledays: "", text: "How would you rate your overall mental health?", answerType: "Health" },
    {
        id: 6,
        section: "Physical Health, Mental Health, and Physical Function",
        pastcoupledays: "",
        text: "For at least the past 6 months, to what extent have you been limited because of a health problem in activities people usually do?",
        answerType: "Limitation",
    },
    { id: 7, section: "Meaning and Purpose", pastcoupledays: "", text: "Overall, to what extent do you feel the things you do in your life are worthwhile?", answerType: "Worthwhile" },
    { id: 8, section: "Meaning and Purpose", pastcoupledays: "", text: "I understand my purpose in life.", answerType: "Agreement" },
    { id: 9, section: "Meaning and Purpose", pastcoupledays: "", text: "I have a sense of direction and purpose in life.", answerType: "Agreement" },
    { id: 10, section: "Character and Caring", pastcoupledays: "", text: "I always act to promote good in all circumstances, even in difficult and challenging situations.", answerType: "TrueOfMe" },
    { id: 11, section: "Character and Caring", pastcoupledays: "", text: "I’m always able to give up some happiness now for greater happiness later.", answerType: "TrueOfMe" },
    { id: 12, section: "Character and Caring", pastcoupledays: "", text: "How often do you show someone in your community that you love or care for them?", answerType: "Frequency" },
    { id: 13, section: "Relationships", pastcoupledays: "", text: "I am content with my friendships and relationships.", answerType: "Agreement" },
    { id: 14, section: "Relationships", pastcoupledays: "", text: "My relationships are as satisfying as I would want them to be.", answerType: "Agreement" },
    { id: 15, section: "Relationships", pastcoupledays: "", text: "How often do you feel lonely?", answerType: "Loneliness" },
    { id: 16, section: "Community and Social Support", pastcoupledays: "", text: "How would you describe your sense of belonging to your local community?", answerType: "Community" },
    { id: 17, section: "Community and Social Support", pastcoupledays: "", text: "If you were in trouble, do you have relatives or friends you can count on to help you whenever you need them, or not?", answerType: "Frequency" },
    { id: 18, section: "Community and Social Support", pastcoupledays: "", text: "Are you satisfied or dissatisfied with the city or area where you live?", answerType: "Satisfaction" },
    { id: 19, section: "Financial Evaluation and Stability", pastcoupledays: "", text: "How often do you worry about being able to meet normal monthly living expenses?", answerType: "WorryAboutLivingExpenses" },
    { id: 20, section: "Financial Evaluation and Stability", pastcoupledays: "", text: "How often do you worry about safety, food, or housing?", answerType: "WorrySafety" },
    {
        id: 21,
        section: "Financial Evaluation and Stability",
        pastcoupledays: "",
        text:
            "Please imagine the top of the ladder represents the best possible financial situation for you, and the bottom of the ladder represents the worst possible financial situation for you. Please indicate where on the ladder you stand right now.",
        answerType: "Worst-Best",
    },
    { id: 22, section: "Affect", pastcoupledays: "", text: "In general, how happy or unhappy do you usually feel?", answerType: "Happiness" },
    { id: 23, section: "Affect", pastcoupledays: "", text: "During the past two weeks, how often have you experienced positive emotions such as joy, affection, or hope?", answerType: "Frequency" },
    { id: 24, section: "Affect", pastcoupledays: "", text: "During the past two weeks, how often have you experienced negative emotions such as sadness, worry, or despair?", answerType: "Frequency" },
];

// Handle form switching between login and registration
document.getElementById("register-link").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registration-form").style.display = "block";
});

// Handle the 'Start Your Assessment' button click
document.getElementById("startAssessmentBtn").addEventListener("click", function () {
PartAScore = 0;
PartBScore = 0; 
AScoreA = 0; 
BScoreB = 0;
    document.getElementById("about-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("assessment-questions").style.display = "none";
    document.getElementById("assessment-part1").style.display = "none";
    document.getElementById("assessment-part2").style.display = "none";
    document.getElementById("assessment-select").style.display = "none";
    document.getElementById("results-output").style.display = "none";
    document.getElementById("about-form").style.display = "none";
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
    // Show/hide Student info based on Employment Status selection
    document.getElementById("employment").addEventListener("change", function () {
        const studentInputs = document.getElementById("student-inputs");
        const occupationInputs = document.getElementById("occupation-input");
        if (this.value === "Student") {
            studentInputs.style.display = "block";
            occupationInputs.style.display = "none";
        } else if (this.value === "Employed") {
            occupationInputs.style.display = "block";
            studentInputs.style.display = "none";
        } else {
            studentInputs.style.display = "none";
            occupationInputs.style.display = "none";
        }
    });

    // Show/hide custom occupation input when "Other" is selected
    document.getElementById("occupation").addEventListener("change", function () {
        const otherOccupation = document.getElementById("other-occupation");
        if (this.value === "Other") {
            otherOccupation.style.display = "block";
        } else {
            otherOccupation.style.display = "none";
        }
    });

    // Listen for changes on the consent checkbox to enable/disable the button
    document.getElementById("consent-chk").addEventListener("change", function () {
        const proceedButton = document.getElementById("proceed-btn");

        // Check if the checkbox is checked
        if (this.checked) {
            // If checked, enable the "Proceed to Assessment" button
            proceedButton.disabled = false;
        } else {
            // If unchecked, disable the "Proceed to Assessment" button
            proceedButton.disabled = true;
        }
    });

    // Listen for click event on the "Proceed to Assessment" button
    document.getElementById("proceed-btn").addEventListener("click", function (event) {
        // Prevent form submission if not all fields are validated
        event.preventDefault();

        // Get all required fields
        const title = document.getElementById("title");
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const ageGroup = document.getElementById("age-group");
        const employment = document.getElementById("employment");
        const education = document.getElementById("education");
        const gender = document.querySelector("input[name='gender']:checked");

        const consentCheckbox = document.getElementById("consent-chk");

        // Initialize validation flag
        let isValid = true;
        let errorMessage = "";

        // Check required fields
        if (title.value === "") {
            isValid = false;
            errorMessage += "Please select a title.\n";
        }
        if (firstName.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter your first name.\n";
        }
        if (lastName.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter your last name.\n";
        }
        if (email.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";
        }
        if (phone.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter your phone number.\n";
        }
        if (ageGroup.value === "") {
            isValid = false;
            errorMessage += "Please select an age group.\n";
        }
        if (!gender) {
            isValid = false;
            errorMessage += "Please select your gender.\n";
        }
        if (employment.value === "") {
            isValid = false;
            errorMessage += "Please select your employment status.\n";
        }
        if (education.value === "") {
            isValid = false;
            errorMessage += "Please select your education level.\n";
        }

        if (!consentCheckbox || !consentCheckbox.checked) {
            isValid = false;
            errorMessage += "You must provide consent to proceed.\n";
        }

        // Show validation result
        if (isValid) {
            document.getElementById("assessment-questions").style.display = "none";
            document.getElementById("assessment-part1").style.display = "block";
            document.getElementById("assessment-part2").style.display = "none";
            document.getElementById("assessment-select").style.display = "block";
            document.getElementById("results-output").style.display = "none";
            document.getElementById("about-form").style.display = "none";
            document.getElementById("registration-form").style.display = "none";
            document.getElementById("login-form").style.display = "none";
        } else {
            alert(errorMessage);
        }
    });
});

// Render Question Function
function renderQuestion() {
    if (!questionsToUse || questionsToUse.length === 0) {
        // console.error("Questions array is empty or not defined.");
        return;
    }

    const questionContainer = document.getElementById("question-container");
    if (!questionContainer) {
        // console.error("Question container not found.");
        return;
    }

    // Ensure currentQuestionIndex is within bounds
    if (currentQuestionIndex >= questionsToUse.length) {
        // console.log("All questions completed.");
        return;
    }

    const currentQuestion = questionsToUse[currentQuestionIndex];

    const formattedText = currentQuestion.text
        .split(/(?<=[.?])\s+/) // Split on `.` or `?` followed by whitespace
        .map((sentence) => sentence.trim()) // Remove leading/trailing spaces from each sentence
        .join("<br>"); // Join with line breaks

    SectionalTitle = `${currentQuestion.section || "Untitled Section"}`;

    // Set up question container content
    questionContainer.innerHTML = `
    <div class="card" id="question-card">
      <div class="mini-card" style="background-color: #f5fdf7; border-radius: 8px; padding: 15px;">
        <div class="cdays-mini-card">
          <h5 style="color: #930d0e;">
            ${currentQuestion.pastcoupledays || ""}
          </h5>     
        </div>
      </div>
      <div class="mini-card the-question">
        <div class="mini-card" style="border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); overflow: hidden; margin-bottom: 10px;">
          <div class="questionText-card">
            ${(formattedText || "No question text available").trim()}
          </div>
        </div>

        <div class="card">
          <div class="qn-options-container">
            ${getOptionsHtml(currentQuestion.answerType)}
          </div>
        </div>
      </div>
    </div>
  `;

    setupOptionsContainer();
    updateProgress(SectionalTitle);
    setupOptionSelection();
}

// Function to generate options HTML based on answerType
function getOptionsHtml(answerType) {
    const answerOptions = {
        "Worst-Best": {
            0: "0 = Worst Possible",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Best Possible",
        },
        Satisfaction: {
            0: "Not Satisfied at All",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Completely Satisfied",
        },
        Health: {
            0: "0 = Poor",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Perfect Health",
        },
        Limitation: {
            0: "0 = Severely Limited",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Not Limited at All",
        },
        Worthwhile: {
            0: "0 = Not at All Worthwhile",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Completely Worthwhile",
        },
        Agreement: {
            0: "0 =Strongly Disagree",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Strongly Agree",
        },
        TrueOfMe: {
            0: "0 = Not True of Me",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Completely True of Me",
        },
        Frequency: {
            0: "0 = Never",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = All of the Time",
        },
        Happiness: {
            0: "0 = Extremely Unhappy",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Extremely Happy",
        },
        MentalWellBeing: {
            0: "Not at All",
            1: "Rarely",
            2: "Some of the Time",
            3: "Often",
            4: "All the Time",
        },
        Community: {
            0: "0 = Very Weak",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Extremely Strong",
        },
        Loneliness: {
            0: "0 = Always",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Never",
        },
        SatisfactionWithCity: {
            0: "0 = Completely Dissatisfied",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Completely Satisfied",
        },
        WorrySafety: {
            0: "0 = Worry All of the Time",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Do Not Ever Worry",
        },
        WorryAboutLivingExpenses: {
            0: "0 = Worry All of the Time",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10 = Do Not Ever Worry",
        },
    };

    // Check if answerOptions for the given answerType exist
    const options = answerOptions[answerType];
    if (!options) {
        return ""; // Return empty string if no options found for the given answerType
    }

    // Map the options to HTML
    return Object.keys(options)
        .map(
            (key) =>
                `<div class="qn-option-card" data-value="${key}">
          <div class="qn-option-content">
            <div class="qn-card-content">
              <h7>${options[key]}</h7>
            </div>
          </div>
        </div>`
        )
        .join("");
}

// Function to handle option selection and move to the next question
function setupOptionSelection() {
    const optionCards = document.querySelectorAll(".qn-option-card");

    optionCards.forEach((card) => {
        card.addEventListener("click", function () {
            // Remove 'selected' class from other options
            optionCards.forEach((c) => c.classList.remove("selected"));

            // Add 'selected' class to the clicked option
            this.classList.add("selected");

            // Store the latest selected value
            const selectedValue = parseInt(this.getAttribute("data-value"));
            // console.log(`Selected value: ${selectedValue}`);
            const pageTitle = document.getElementById("assessment-title").textContent;

            // Clear any previous timeout to handle quick changes by the user
            if (window.optionTimeout) {
                clearTimeout(window.optionTimeout);
                // console.log("Previous selection canceled — New value selected.");
            }

            // Start a new timeout after selection
            window.optionTimeout = setTimeout(() => {
                // console.log(`Final selected value added to PartAScore: ${selectedValue}`);
                if (pageTitle.includes("Part A")) {
                    PartAScore += selectedValue + 1; // Add only the final value after timeout
                    AScoreA += selectedValue + 1;
                    console.log(`Updated PartAScore: ${PartAScore}`);
                }
                if (pageTitle.includes("Part B")) {
                    PartBScore += selectedValue; // Add only the final value after timeout
                    BScoreB += selectedValue;
                    // console.log(`Updated PartBScore: ${PartBScore}`);
                }

                currentQuestionIndex++;

                // If there are more questions to address
                if (currentQuestionIndex < questionsToUse.length) {
                    // console.log(`Moving to next question: ${currentQuestionIndex}`);
                    renderQuestion(); // Render next question after timeout
                } else {
                    // console.log("All questions completed.");

                    // Handle end of Part A
                    if (pageTitle.includes("Part A")) {
                        // console.log("Switching to Part B...");
                        document.getElementById("assessment-select").style.display = "block"; // Show Assessment Select Page
                        document.getElementById("assessment-part1").style.display = "none"; // Hide Part A
                        document.getElementById("assessment-part2").style.display = "block"; // Show Part B
                        document.getElementById("assessment-questions").style.display = "none"; // Hide Questions Page
                        document.getElementById("results-output").style.display = "none"; // Hide Results Page
                        switchToPart("part2"); // Start Part B
                    }
                    // Handle end of Part B
                    else if (pageTitle.includes("Part B")) {
                        // console.log("Switching to results...");
                        completeAssessment(); // Navigate to results page
                    }
                }
            }, 500); // 1-second delay after last selection
        });
    });
}

// Utility function to toggle element visibility
function toggleVisibility(elementId, visible) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = visible ? "block" : "none";
    } else {
        // console.warn(`Element with ID '${elementId}' not found.`);
    }
}

function completeAssessment() {
    // console.log("Starting completeAssessment...");

    try {
        // Hide all assessment-related sections
        toggleVisibility("assessment-select", false);
        toggleVisibility("assessment-questions", false);
        toggleVisibility("assessment-part1", false);
        toggleVisibility("assessment-part2", false);

        // Calculate scores for Part A and Part B
        const partAScore = PartAScore; // Use the global PartAScore variable
        const partBScore = PartBScore; // Use the global PartBScore variable

        // console.log(`Part A Score: ${partAScore}`);
        // console.log(`Part B Score: ${partBScore}`);

        // Ensure scores are valid before proceeding
        if (isNaN(partAScore) || isNaN(partBScore)) {
            throw new Error("Invalid score data for graph rendering.");
        }

        // Display the results section
        const resultsOutput = document.getElementById("results-output");
        if (!resultsOutput) {
            throw new Error("Element with ID 'results-output' not found.");
        }
        resultsOutput.style.display = "block";

        // Render bar graph for scores
        if (typeof renderGraph === "function") {
            renderGraph(partAScore, partBScore);
        } else {
            // console.warn("renderGraph function is not defined.");
        }

        // Create donut charts and trends graph
        if (typeof createCharts === "function") {
            createCharts(partAScore, partBScore, scoreTrendData, "Part A", "Part B");
        } else {
            // console.warn("createCharts function is not defined.");
        }

        // console.log("Assessment completed and results displayed successfully.");
    } catch (error) {
        // console.error(`Error in completeAssessment: ${error.message}`);
    }
    createAllCharts();
}

function updateProgress() {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        const progress = ((currentQuestionIndex + 1) / questionsToUse.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    let progressText = document.getElementById("progress-text");

    if (!progressText || !questionsToUse || questionsToUse.length === 0) {
        // console.error("Progress text element or questions array not found.");
        return;
    }

    // progressText.textContent = `$SectionalTitle Checkpoint ${currentQuestionIndex + 1} of ${questionsToUse.length}`;
    progressText.textContent = `${SectionalTitle} - Checkpoint ${currentQuestionIndex + 1} of ${questionsToUse.length}`;
}

/* Ensure Option Cards Behave Properly */
function setupOptionsContainer() {
    const optionsContainer = document.querySelector(".options-container");
    if (optionsContainer) {
        optionsContainer.style.display = "flex";
        optionsContainer.style.flexDirection = "column"; /* Stack vertically */
        optionsContainer.style.gap = "10px"; /* Spacing between cards */
    }

    const optionCards = document.querySelectorAll(".option-card");
    optionCards.forEach((card) => {
        card.style.display = "flex";
        card.style.alignItems = "center";
        card.style.padding = "8px 12px";
        card.style.backgroundColor = "#fff";
        card.style.border = "1px solid #ddd";
        card.style.borderRadius = "8px";
        card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        card.style.cursor = "pointer";

        // Hover effects
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-2px)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
        });
    });

    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
        icon.style.width = "30px";
        icon.style.height = "30px";
        icon.style.marginRight = "10px"; /* Space between icon and text */
    });

    const cardContent = document.querySelectorAll(".card-content h5");
    cardContent.forEach((content) => {
        content.style.margin = "0";
        content.style.fontSize = "1rem";
        content.style.color = "#333";
        content.style.fontWeight = "500";
    });
}

// Setup event listener for the "Start Part A" button
document.getElementById("startFourteenBtn").addEventListener("click", function () {
    // Hide Part A and Part B initially
PartAScore = 0;
PartBScore = 0; 
AScoreA = 0; 
BScoreB = 0;
    document.getElementById("assessment-part1").style.display = "none";
    document.getElementById("assessment-part2").style.display = "none";

    // Show the assessment select window with only Part 2 showing
    document.getElementById("assessment-select").style.display = "block";

    // Also, we hide Part 1 of the assessment and only show Part 2 after startFourteenBtn click
    document.getElementById("assessment-part2").style.display = "block";
    document.getElementById("assessment-select").style.display = "none"; // Optionally hide this at the start
});

// Function to update the title dynamically based on the assessment part
function updateAssessmentTitle(part) {
    const title = document.getElementById("assessment-title");

    if (part === "part1") {
        title.innerHTML = "Monitor Your Mental Well-Being: Part A - 14 Survey Checkpoints";
    } else if (part === "part2") {
        title.innerHTML = "Monitor Your Mental Well-Being: Part B - 24 Survey Checkpoints";
    }
}

// Function to switch to the selected part and hide others
function switchToPart(part) {
    // Hide both parts
    document.getElementById("assessment-part1").style.display = "none";
    document.getElementById("assessment-part2").style.display = "none";

    // Show the selected part
    if (part === "part1") {
        document.getElementById("assessment-part1").style.display = "block";
    } else if (part === "part2") {
        document.getElementById("assessment-part2").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let startTwentyFourBtn = document.getElementById("startTwentyFourBtn");
    let startFourteenBtn = document.getElementById("startFourteenBtn");

    if (startTwentyFourBtn) {
        startTwentyFourBtn.addEventListener("click", function () {
            document.getElementById("assessment-select").style.display = "none";
            document.getElementById("assessment-questions").style.display = "block";
            updateAssessmentTitle("part2");
            switchToPart("part2");

            if (typeof questionsII !== "undefined" && Array.isArray(questionsII)) {
                questionsToUse = questionsII; // Set the correct question set
                PartBScore = 0;
                currentQuestionIndex = 0; // Reset question index
                renderQuestion(); // Render the first question
            } else {
                // console.error("questionsII is not defined or not an array.");
            }
        });
    }

    if (startFourteenBtn) {
        startFourteenBtn.addEventListener("click", function () {
            document.getElementById("assessment-select").style.display = "none";
            document.getElementById("assessment-questions").style.display = "block";
            updateAssessmentTitle("part1");
            switchToPart("part1");

            if (typeof questions !== "undefined" && Array.isArray(questions)) {
                questionsToUse = questions; // Use the first question set
                PartAScore = 0;
                currentQuestionIndex = 0; // Reset index
                renderQuestion(); // Render the first question
            } else {
                // console.error("questions is not defined or not an array.");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the navigation links
    let aboutLink = document.getElementById("about-link");
    let loginLink = document.getElementById("login-link");
    let registerLink = document.getElementById("register-link");
    let assessmentsLink = document.getElementById("assessments-link");
    let resultsLink = document.getElementById("results-link");

    // Select the sections
    let aboutSection = document.getElementById("about-form");
    let loginSection = document.getElementById("login-form");
    let registerSection = document.getElementById("register-form");
    let assessmentsSection = document.getElementById("assessment-select");
    let assessmentsQuestions = document.getElementById("assessment-questions");
    let resultsSection = document.getElementById("results-output");
    let assessmentPart1 = document.getElementById("assessment-part1");
    let assessmentPart2 = document.getElementById("assessment-part2");

    if (aboutLink) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("assessment-questions").style.display = "none";
            document.getElementById("assessment-part1").style.display = "none";
            document.getElementById("assessment-part2").style.display = "none";
            document.getElementById("assessment-select").style.display = "none";
            document.getElementById("results-output").style.display = "none";
            document.getElementById("about-form").style.display = "block";
            document.getElementById("registration-form").style.display = "none";
            document.getElementById("login-form").style.display = "none";
        });
    }
    if (loginLink) {
        loginLink.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("assessment-questions").style.display = "none";
            document.getElementById("assessment-part1").style.display = "none";
            document.getElementById("assessment-part2").style.display = "none";
            document.getElementById("assessment-select").style.display = "none";
            document.getElementById("results-output").style.display = "none";
            document.getElementById("about-form").style.display = "none";
            document.getElementById("registration-form").style.display = "none";
            document.getElementById("login-form").style.display = "block";
            document.getElementById("otp-form").style.display = "none";
        });
    }
    if (registerLink) {
        registerLink.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("assessment-questions").style.display = "none";
            document.getElementById("assessment-part1").style.display = "none";
            document.getElementById("assessment-part2").style.display = "none";
            document.getElementById("assessment-select").style.display = "none";
            document.getElementById("results-output").style.display = "none";
            document.getElementById("about-form").style.display = "none";
            document.getElementById("registration-form").style.display = "block";
            document.getElementById("login-form").style.display = "none";
        });
    }

    if (assessmentsLink) {
        assessmentsLink.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("assessment-questions").style.display = "none";
            document.getElementById("assessment-part1").style.display = "block";
            document.getElementById("assessment-part2").style.display = "none";
            document.getElementById("assessment-select").style.display = "block";
            document.getElementById("results-output").style.display = "none";
            document.getElementById("about-form").style.display = "none";
            document.getElementById("registration-form").style.display = "none";
            document.getElementById("login-form").style.display = "none";
        });
    }

    if (resultsLink) {
        resultsLink.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("assessment-questions").style.display = "none";
            document.getElementById("assessment-part1").style.display = "none";
            document.getElementById("assessment-part2").style.display = "none";
            document.getElementById("assessment-select").style.display = "none";
            document.getElementById("results-output").style.display = "block";
            document.getElementById("about-form").style.display = "none";
            document.getElementById("registration-form").style.display = "none";
            document.getElementById("login-form").style.display = "none";
        });
    }
});

function showAboutForm() {
    document.getElementById("about-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("assessment-select").style.display = "none";
    document.getElementById("assessment-part1").style.display = "none";
    document.getElementById("assessment-questions").style.display = "none";
    document.getElementById("assessment-part2").style.display = "none";
    document.getElementById("assessment-select").style.display = "none";
    document.getElementById("results-output").style.display = "none";
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
}

/* --------- RESULTS HANDLING --------- */
function submitAnswers() {
    toggleElementVisibility("questions-section", false);
    calculateResults();
}

function calculateResults(part) {
    // console.log(`Starting calculateResults for ${part}`);

    let score;
    let recommendation; // Define outside the block to make it accessible

    if (part === "partA") {
        score = PartAScore;
        // console.log(`${part} Score:`, score);
        recommendation = getRecommendation(score, part);
        // console.log(`Recommendation for ${part}:`, recommendation);
    } else if (part === "partB") {
        score = PartBScore;
        // console.log(`${part} Score:`, score);
        recommendation = getRecommendation(score, part);
        // console.log(`Recommendation for ${part}:`, recommendation);
    } else {
        // console.error(`Invalid part: ${part}`);
        return;
    }

    // Ensure recommendation is defined before proceeding
    if (!recommendation) {
        // console.error(`Error: recommendation is undefined for ${part}`);
        return;
    }

    displayResults(score, recommendation, part); // Pass part to displayResults()
    // console.log(`${part} score after reset:`, score);

    // Optionally update ripple color directly
    // changeRippleColor(score, part);
}

function renderGraph(partAScore, partBScore) {
    // console.log("Starting renderGraph...");
    // console.log(`Part A Score: ${partAScore}, Part B Score: ${partBScore}`);

    const canvas = document.getElementById("scoreChart");
    if (!canvas) {
        // console.error("Canvas element with ID 'scoreChart' not found.");
        return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        // console.error("Failed to get 2D context from canvas.");
        return;
    }

    if (window.scoreChart instanceof Chart) {
        // console.log("Destroying existing chart...");
        window.scoreChart.destroy();
    }

    try {
        const partARecommendation = "#f1c40f";
        const partBRecommendation = "#ff8c00";

        window.scoreChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Part A", "Part B"],
                datasets: [
                    {
                        label: "Mental Well-Being Scores",
                        data: [partAScore, partBScore],
                        backgroundColor: ["#ff8c00", "#ff8c00"],
                        borderColor: ["#2ecc71", "#2ecc71"],
                        borderWidth: 2,
                        borderRadius: 12,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: "#555",
                            font: {
                                size: 14,
                            },
                        },
                        grid: {
                            color: "#eee",
                        },
                    },
                    x: {
                        ticks: {
                            color: "#555",
                            font: {
                                size: 14,
                            },
                        },
                        grid: {
                            color: "#eee",
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: "#555",
                            font: {
                                size: 14,
                            },
                        },
                    },
                },
            },
        });
    } catch (error) {
        // console.error("Error rendering chart:", error);
    }
}

// Global chart instances to keep track of existing charts
let charts = {};

function destroyChart(chartId) {
    if (charts[chartId]) {
        charts[chartId].destroy(); // Destroy existing chart
    }
}

// Function to create charts dynamically
function createChart(id, type, data, options) {
    const ctx = document.getElementById(id)?.getContext("2d");
    if (ctx) {
        // Destroy the existing chart if it already exists
        destroyChart(id);
        charts[id] = new Chart(ctx, { type, data, options });
    }
}

// Function to create all charts
function createAllCharts() {
    console.log(`The PartAScore: ${PartAScore}`);
    console.log(`The AScore: ${AScoreA}`);
    console.log(`The PartBScore: ${PartBScore}`);
    console.log(`The BScore: ${BScoreB}`);


    // Calculate percentages
    const percA = ((AScoreA / 70) * 100).toFixed(2);  // Calculate percentage for Part A
    const percB = ((BScoreB / 240) * 100).toFixed(2);  // Calculate percentage for Part B

// Example: Update dynamically based on data
updateScore('a', percA); // Part A score
updateScore('b', percB); // Part B score



}

// ✅ Trigger chart creation on CompleteAssessment event
document.addEventListener("CompleteAssessment", () => {
    console.log("CompleteAssessment event triggered");
    createAllCharts(); // Trigger chart creation
});

// Function to create a percentage chart
function createPercentageChart(chartId, score, maxScore, colors) {
    const percentage = (score / maxScore) * 100;
    createChart(
        chartId,
        "doughnut",
        {
            labels: ["Achieved", "Remaining"],
            datasets: [
                {
                    data: [percentage, 100 - percentage],
                    backgroundColor: colors,
                },
            ],
        },
        { responsive: true }
    );
}

// Function to create a radar chart
function createRadarChart(chartId, score, maxScore, colors, label) {
    let data = [0, 0, 0, 0];
    const labels = ["Severe Concerns", "Moderate Concerns", "Good", "Excellent Mental Well-Being"];

    // Determine where to place the score on the radar chart
    if (score >= 61 || score >= 192) {
        data[3] = score;
    } else if (score >= 45 || score >= 131) {
        data[2] = score;
    } else if (score >= 41 || score >= 72) {
        data[1] = score;
    } else {
        data[0] = score;
    }

    createChart(
        chartId,
        "radar",
        {
            labels: labels,
            datasets: [
                {
                    label: label,
                    data: data,
                    backgroundColor: "rgba(54, 162, 235, 0.2)", // Transparent blue
                    borderColor: colors.border,
                },
            ],
        },
        { responsive: true }
    );


}

function updateTitles(AScoreA, BScoreB) {
    const titlePartA = document.getElementById('titlePartA');
    const titlePartB = document.getElementById('titlePartB');

    if (titlePartA) {
        titlePartA.innerHTML = 
            `🧠 Part A – Emotional and Psychological State - Score: <span style="color: #00A86B; font-weight: bold;">${AScoreA}</span> out of 70`;
    }

    if (titlePartB) {
        titlePartB.innerHTML = 
            `🧠 Part B – Behavioral and Functional State - Score: <span style="color: #00A86B; font-weight: bold;">${BScoreB}</span> out of 240`;
    }
}


function updatePercentageTitles(AScoreA, BScoreB) {
    const titlePercA = document.getElementById('titlePercA');
    const titlePercB = document.getElementById('titlePercB');

    // Calculate percentages
    const percA = ((AScoreA / 70) * 100).toFixed(2);  // Calculate percentage for Part A
    const percB = ((BScoreB / 240) * 100).toFixed(2);  // Calculate percentage for Part B

    // Update the titles with the percentage values
    if (titlePercA) {
        titlePercA.innerHTML = 
            `🎯 Part A – Emotional and Psychological State - Percentage Score: <span style="color: #00A86B; font-weight: bold;">${percA}%</span>`;
    }

    if (titlePercB) {
        titlePercB.innerHTML = 
            `🎯 Part B – Behavioral and Functional State - Percentage Score: <span style="color: #00A86B; font-weight: bold;">${percB}%</span>`;
    }
}

// Extract values from the form
function collectFormData() {
    let formData = {
        title: document.getElementById('title').value,
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        ageGroup: document.getElementById('age-group').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        employmentStatus: document.getElementById('employment').value,
        educationLevel: document.getElementById('education').value,
        // Add other conditional fields like occupation, school name, etc.
        occupation: document.getElementById('occupation') ? document.getElementById('occupation').value : '',
        customOccupation: document.getElementById('custom-occupation') ? document.getElementById('custom-occupation').value : '',
        consent: document.getElementById('consent-chk').checked
    };
    return formData;
}

// Send data to Freshworks via API
function sendToFreshworks(formData) {
    const apiUrl = 'https://your-freshworks-url.com/api/endpoint'; // Replace with your Freshworks API URL
    const apiKey = 'your-api-key'; // Replace with your Freshworks API Key

    const data = {
        // Map the formData object to the Freshworks API required fields
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        custom_fields: {
            title: formData.title,
            age_group: formData.ageGroup,
            gender: formData.gender,
            employment_status: formData.employmentStatus,
            education_level: formData.educationLevel,
            occupation: formData.occupation,
            custom_occupation: formData.customOccupation
        },
        consent: formData.consent
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form data sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending form data:', error);
    });
}


// Simulate OTP for demo purposes (In production, use Freshworks or another service)
let generatedOtp = '123456'; // This would be generated dynamically and sent to the user

// Event Listener for Login Button
document.getElementById('loginBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get Username (No password field now)
    const username = document.getElementById('username').value;

    if (username) {
        // Check if username is a valid email or phone number
        if (validateUsername(username)) {
            // Hide login form and show OTP form
            document.getElementById('login').style.display = 'none';
            document.getElementById('otp-form').style.display = 'block';

            // Simulate sending OTP (You would call Freshworks or your OTP API here)
            sendOtp(username); // Replace with Freshworks OTP sending logic
        } else {
            alert("Please enter a valid email or phone number.");
        }
    } else {
        alert("Please enter your username.");
    }
});

// Function to validate if the username is an email or phone number
function validateUsername(username) {
    // Regular expression to check if the input is an email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regular expression to check if the input is a valid phone number (basic example)
    const phoneRegex = /^[0-9]{10}$/;

    // Check if username matches email or phone number pattern
    return emailRegex.test(username) || phoneRegex.test(username);
}

// Simulate sending OTP (In production, integrate with an API)
function sendOtp(username) {
    // Here you would use an API like Freshworks to send the OTP
    console.log(`OTP sent to ${username}: ${generatedOtp}`);
}

// Event Listener for OTP Verification
document.getElementById('verifyOtpBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get OTP input
    const enteredOtp = document.getElementById('otp').value;

    // Check if the entered OTP matches the generated one
    if (enteredOtp === generatedOtp) {
        // OTP is correct, proceed with login (you can integrate Freshworks login here)
        document.getElementById("assessment-questions").style.display = "none";
        document.getElementById("assessment-part1").style.display = "block";
        document.getElementById("assessment-part2").style.display = "none";
        document.getElementById("assessment-select").style.display = "block";
        document.getElementById("results-output").style.display = "none";
        document.getElementById("about-form").style.display = "none";
        document.getElementById("registration-form").style.display = "none";
        document.getElementById("login-form").style.display = "none";

    } else {
        alert("Invalid OTP. Please try again.");
    }
});




// Function to update score dynamically
function updateScore(part, score) {
    const progressBar = document.getElementById(`progress-bar-${part}`);
    const resultScore = document.getElementById(`result-score-${part}`);
    const progressPath = progressBar.parentElement; // Target the progress path
    const resultBox = resultScore.parentElement; // Target the result box

    // Cap the score between 0 and 100 for safety
    const finalScore = Math.min(Math.max(score, 0), 100);
    const widthPercentage = `${finalScore}%`;

    // Update progress bar width and score text
    progressBar.style.width = widthPercentage;
    resultScore.innerHTML = `Score: <b>${finalScore}</b>`;

    // Function to determine color based on part and score
    function getProgressBarColor(part, score) {
        if (part === 'a') {
            if (score <= 57) return '#FF0000'; // Red for severe concerns
            if (score <= 63) return '#FF8C00'; // Orange for moderate concerns
            if (score <= 86) return '#FFFC00'; // Yellow for mild concerns
            return '#00FF00'; // Green for good
        } else if (part === 'b') {
            if (score <= 29) return '#FF0000'; // Red for severe concerns
            if (score <= 54) return '#FF8C00'; // Orange for moderate concerns
            if (score <= 79) return '#FFFC00'; // Yellow for mild concerns
            return '#00FF00'; // Green for good
        }
    }

    // Get the color based on the score
    const barColor = getProgressBarColor(part, finalScore);

    // Apply color transition to the progress bar, progress path, and result box
    //progressBar.style.backgroundColor = barColor;
    //progressPath.style.backgroundColor = barColor;
    resultBox.style.backgroundColor = barColor; // Reflect color in the result box
}



