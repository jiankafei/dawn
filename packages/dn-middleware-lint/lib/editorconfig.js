module.exports = `
# EditorConfig is awesome: http://EditorConfig.org

root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
# editorconfig-tools is unable to ignore longs strings or urls
max_line_length = off

[*.md]
indent_size = false
trim_trailing_whitespace = false
`;
