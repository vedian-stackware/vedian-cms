<?php

namespace App\Enumerations;

enum Status: string
{
    case DRAFT = 'draft';
    case PUBLISHED = 'published';
    case ARCHIVED = 'archived';
    case DELETED = 'deleted';
    case ALL = 'all';

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

    public static function draft(): string
    {
        return self::DRAFT->value;
    }

    public static function published(): string
    {
        return self::PUBLISHED->value;
    }

    public static function archived(): string
    {
        return self::ARCHIVED->value;
    }

    public static function deleted(): string
    {
        return self::DELETED->value;
    }
}
