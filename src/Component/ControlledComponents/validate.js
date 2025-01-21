export const validate = (rules = [], value, setError) => {
    for (let rule of rules) {

        if (rule?.required && value?.length === 0) {
            setError(rule.message);
            return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
            setError(rule.message);
            return true;
        }
        if (rule.maxLength && value.length > rule.maxLength) {
            setError(rule.message);
            return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
            setError(rule.message);
            return true;
        }
    }
    setError(null);
    return false;
};