<?php

namespace App\Enumerations;

enum ContentType: string
{
    case PAGE = 'page';
    case ARTICLE = 'article';
    case MEDIA = 'media';
    case GALLERY = 'gallery';
    case VIDEO = 'video';

    // Returns all possible enum values
    public static function values(): array
    {
        return array_map(fn($case) => $case->value, self::cases());
    }

    // Check if a given value is valid
    public static function isValid(string $value): bool
    {
        return in_array(strtoupper($value), self::values());
    }

    // Get the enum case by value
    public static function get(string $value): ?self
    {
        return self::tryFrom($value);
    }

    public static function page()
    {
        return self::PAGE->value;
    }

    public static function article()
    {
        return self::ARTICLE->value;
    }

    public static function media()
    {
        return self::MEDIA->value;
    }

    public static function gallery()
    {
        return self::GALLERY->value;
    }

    public static function video()
    {
        return self::VIDEO->value;
    }
}
