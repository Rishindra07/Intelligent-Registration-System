export const disposableDomains = ["tempmail.com", "mailinator.com"];

export function checkPasswordStrength(pwd) {
  let score = 0;
  if (pwd.length > 6) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  return score === 3 ? "Strong" : score === 2 ? "Medium" : "Weak";
}

export function validateForm(form) {
  const e = {};

  if (!form.firstName) e.firstName = "Required";
  if (!form.lastName) e.lastName = "Required";

  if (!form.email) e.email = "Required";
  else if (disposableDomains.some(d => form.email.endsWith(d)))
    e.email = "Disposable email not allowed";

  if (!/^\+\d+/.test(form.phone))
    e.phone = "Must start with country code";

  if (!form.gender) e.gender = "Required";
  if (!form.country) e.country = "Required";
  if (!form.state) e.state = "Required";
  if (!form.city) e.city = "Required";

  if (!form.password) e.password = "Required";
  if (form.password !== form.confirmPassword)
    e.confirmPassword = "Passwords mismatch";

  if (!form.terms) e.terms = "Accept terms";

  return e;
}
