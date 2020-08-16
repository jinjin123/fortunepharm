<?php

namespace Drupal\condition_query\Plugin\rest\resource;

use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "api_rest_resource",
 *   label = @Translation("Api rest resource"),
 *   uri_paths = {
 *     "create" = "/productSymptom"
 *   }
 * )
 */
class ApiRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    $instance = parent::create($container, $configuration, $plugin_id, $plugin_definition);
    $instance->logger = $container->get('logger.factory')->get('condition_query');
    $instance->currentUser = $container->get('current_user');
    return $instance;
  }

    /**
     * Responds to POST requests.
     *
     * @param string $payload
     *
     * @return \Drupal\rest\ModifiedResourceResponse
     *   The HTTP response object.
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     *   Throws exception expected.
     */
    public function post() {
//      \Drupal::request()->request
//        // You must to implement the logic of your REST Resource here.
//        // Use current user after pass authentication to validate access.
//        if (!$this->currentUser->hasPermission('access content')) {
//            throw new AccessDeniedHttpException();
//        }
//
        return new ModifiedResourceResponse(json_encode(\Drupal::request()->request));
    }

}
