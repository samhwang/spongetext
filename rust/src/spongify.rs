use rand::prelude::*;

fn spongify(input: String) -> String {
    let input_string = input.trim().to_lowercase();
    let mut output = String::from("");
    for character in input_string.chars() {
        if (rand::random()) {
            output.push(character.to_ascii_uppercase());
        } else {
            output.push(character);
        }
    }
    output
}

#[cfg(test)]
mod tests {
    use super::*;
    use fake::{Fake, Faker};

    fn get_sponge_text() -> (String, String) {
        let input = Faker.fake::<String>();
        let output = spongify(input.to_string());
        (input, output)
    }

    #[test]
    fn test_not_undefined() {
        let (_, output) = get_sponge_text();
        let is_not_blank = !output.is_empty();
        assert!(is_not_blank);
    }

    #[test]
    fn test_should_have_same_length() {
        let (input, output) = get_sponge_text();
        assert_eq!(input.len(), output.len());
    }
}
