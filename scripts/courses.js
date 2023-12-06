const advancedButton = document.getElementById("advanced-business-strategy-button");
const salesButton = document.getElementById("sales-system-button");
const publicButton = document.getElementById("public-speaking-button");
const strategyButton = document.getElementById("strategy-sessions-button");

const advanced = document.getElementById("advanced-business-strategy");
const sales = document.getElementById("sales-system");
const public = document.getElementById("public-speaking");
const strategy = document.getElementById("strategy-sessions");

const advancedChange = (event) => {
    sales.classList.remove("active");
    salesButton.classList.remove("active");
    public.classList.remove("active");
    publicButton.classList.remove("active");
    strategy.classList.remove("active");
    strategyButton.classList.remove("active");
    advanced.classList.add("active");
    advancedButton.classList.add("active");
};

const salesChange = (event) => {
    public.classList.remove("active");
    publicButton.classList.remove("active");
    strategy.classList.remove("active");
    strategyButton.classList.remove("active");
    advanced.classList.remove("active");
    advancedButton.classList.remove("active");
    sales.classList.add("active");
    salesButton.classList.add("active");
};

const publicChange = (event) => {
    sales.classList.remove("active");
    salesButton.classList.remove("active");
    strategy.classList.remove("active");
    strategyButton.classList.remove("active");
    advanced.classList.remove("active");
    advancedButton.classList.remove("active");
    public.classList.add("active");
    publicButton.classList.add("active");
};

const strategyChange = (event) => {
    public.classList.remove("active");
    publicButton.classList.remove("active");
    strategy.classList.remove("active");
    strategyButton.classList.remove("active");
    advanced.classList.remove("active");
    advancedButton.classList.remove("active");
    strategy.classList.add("active");
    strategyButton.classList.add("active");
};

advancedButton.addEventListener("click", advancedChange);

salesButton.addEventListener("click", salesChange);

publicButton.addEventListener("click", publicChange);

strategyButton.addEventListener("click", strategyChange);

