<?php

/**
 * Twenty Nineteen の子テーマサンプルです。
 */

//style.cssの読み込み
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_parent_theme_file_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_theme_file_uri() . '/style.css' );
}

//子テーマ用のテーマサポートの読み込み
function setup_editor_menu_for_19child() {
    //カラーパレット
    add_theme_support( 'editor-color-palette', array(
        array(
            'name' => 'メインカラー',
            'slug' => 'primary',
            'color' => '#CE2121',
        ),
        array(
            'name' => 'サブカラー',
            'slug' => 'secondary',
            'color' => '#988768',
        ),
        array(
            'name' => '背景用',
            'slug' => 'background',
            'color' => '#000',
        )
    ) );
    //フォントサイズ
    add_theme_support( 'editor-font-sizes', array(
        array(
            'name' => __( 'Small', 'themeLangDomain' ),
            'size' => 12,
            'slug' => 'small'
        ),
        array(
            'name' => __( 'Normal', 'themeLangDomain' ),
            'size' => 14,
            'slug' => 'normal'
        ),
        array(
            'name' => __( 'Large', 'themeLangDomain' ),
            'size' => 21,
            'slug' => 'large'
        ),
        array(
            'name' => __( 'Huge', 'themeLangDomain' ),
            'size' => 36,
            'slug' => 'huge'
        )
    ) );

    //カスタムカラーをオフにする設定
    //add_theme_support( 'disable-custom-colors' );

    //文字サイズの数値指定をオフにする設定
    add_theme_support( 'disable-custom-font-sizes' );

    //エディタースタイルのサポートをon
    add_theme_support( 'editor-styles' );

    //エディタースタイルに反映するCSSを指定
    add_editor_style( 'editor-style-child.css' );

 }
add_action( 'after_setup_theme', 'setup_editor_menu_for_19child' ,11);






?>
