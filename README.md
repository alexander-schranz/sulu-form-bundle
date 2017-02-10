# Sulu Form Bundle

Simple handling from Symfony Forms in [Sulu.io](http://sulu.io).  
You can use this Bundle to create and handle static *(integrated in a Sulu page or loaded via AJAX)* or dynamic forms.

[Documentation](Resources/doc/index.md "Documentation")

## Future Updates

The bundle moved [SuluFormBundle](https://github.com/sulu/SuluFormBundle "SuluFormBundle").

**Migration to sulu/sulu-form-bundle**

The ^1.0 version can be migrated to ^0.1 of the sulu bundle with the following SQL statements:

```sql
RENAME TABLE `l91_fo_dynamic` TO `fo_dynamics`;
RENAME TABLE `l91_fo_form` TO `fo_forms`;
RENAME TABLE `l91_fo_form_field_translations` TO `fo_form_field_translations`;
RENAME TABLE `l91_fo_form_fields` TO `fo_form_fields`;
RENAME TABLE `l91_fo_form_translations` TO `fo_form_translations`;
```

Then following the [Installation Documentation](https://github.com/sulu/SuluFormBundle/blob/master/Resources/doc/index.md "Installation Documentation").
