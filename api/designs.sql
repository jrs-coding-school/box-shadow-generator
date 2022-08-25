DROP SCHEMA IF EXISTS `box_shadows`;

CREATE SCHEMA `box_shadows` ;

CREATE TABLE `box_shadows`.`designs` (
  `id` VARCHAR(45) NOT NULL UNIQUE,
  `x` INT NOT NULL,
  `y` INT NOT NULL,
  `blur` INT NOT NULL DEFAULT 0,
  `opacity` INT NOT NULL DEFAULT 100,
  `grow` INT NOT NULL DEFAULT 0,
  `inset` BOOLEAN NOT NULL DEFAULT false,
  `color` VARCHAR(7) NOT NULL,

  PRIMARY KEY (`id`)
);
