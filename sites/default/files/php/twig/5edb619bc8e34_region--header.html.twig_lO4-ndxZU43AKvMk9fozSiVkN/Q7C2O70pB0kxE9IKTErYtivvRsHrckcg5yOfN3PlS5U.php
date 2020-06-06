<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/pharm_theme/templates/region/region--header.html.twig */
class __TwigTemplate_77398d3b01d26b42e4bf2c85d4e083c448b986e7059630656ac7fe5d936037c0 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 1];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null)), "html", null, true);
        echo " class=\"inner\">
  <div class=\"navbar-header\">
    ";
        // line 3
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["elements"] ?? null), "pharm_theme_branding", [])), "html", null, true);
        echo "
  </div>
  <nav class=\"collapse navbar-collapse bs-navbar-collapse\">
    ";
        // line 6
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["elements"] ?? null), "pharm_theme_main_menu", [])), "html", null, true);
        echo "
    ";
        // line 16
        echo "    <div class=\"navbar-right\">
      <ul id=\"lang\" class=\"nav navbar-nav\">
        <li class=\"\"><a href=\"http://www.fortunepharm.com/cht/other-services\">繁</a></li>
        <li class=\"\"><a href=\"http://www.fortunepharm.com/chs/other-services\">簡</a></li>
        <li class=\"active\"><a href=\"http://www.fortunepharm.com/eng/other-services\">ENG</a></li>
      </ul>
      <ul id=\"social-icon\" class=\"nav navbar-nav\">
        <li><a href=\"https://www.facebook.com/Fortune.Pharmacal\" target=\"_blank\" class=\"fb-icon\"></a></li>
        <li><a href=\"http://weibo.com/fortunepharmacal\" target=\"_blank\" class=\"weibo-icon\"></a></li>
        <li><a href=\"https://www.youtube.com/user/FortunePharmHK\" target=\"_blank\" class=\"youtube-icon\"></a></li>
      </ul>
    </div>
  </nav>
";
    }

    public function getTemplateName()
    {
        return "themes/pharm_theme/templates/region/region--header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  71 => 16,  67 => 6,  61 => 3,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/pharm_theme/templates/region/region--header.html.twig", "/var/www/html/themes/pharm_theme/templates/region/region--header.html.twig");
    }
}
